import { createContext, useContext } from "react";

import { getFactoryContract, getSTContract } from "../hooks/useContract";

//external imports
import { useProvider, useSigner } from "wagmi";

import Swal from "sweetalert2";
import { factoryAddress } from "../constants";

const factoryContext = createContext();

export const useFactory = () => {
  return useContext(factoryContext);
};

export const FactoryProvider = ({ children }) => {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const signerContract = getFactoryContract(signer);
  const providerContract = getFactoryContract(provider);
  const signerSTcontract = getSTContract(signer);

  const PriceCalculator = async (isST, amount) => {
    const charges = await providerContract.priceCalculator(isST, amount);
    const price = charges[1].toString();
    return price;
  };

  const purchaseTokens = async (amount, isST) => {
    const price = PriceCalculator(initialSupply, isST);
    await signerSTcontract.approve(factoryAddress, price);
    signerContract
      .purchaseTokens(amount, isST, { value: isST ? 0 : price })
      .then(async (tx) => {
        tx.wait(1).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully purchased your business tokens !",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      });
  };

  /**
   *
   * @param {*} data send in the form of object
   * @param {*} isST
   */
  const createTokens = async (data, isST) => {
    const { name, symbol, initialSupply, image } = data;
    const price = PriceCalculator(initialSupply, isST);
    await signerSTcontract.approve(factoryAddress, price);
    signerContract
      .createdToken(name, symbol, initialSupply, image, isST, {
        value: isST ? 0 : price,
      })
      .then(async (tx) => {
        tx.wait(1).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully created your tokens !",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      });
  };

  const withDraw = async ({}) => {
    try {
      signerContract.withDrawCollection().then(async (tx) => {
        tx.wait().then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Withdrawn the collected native payments",
            showConfirmButton: false,
            timer: 4000,
          });
        });
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getTokenAddress = async () => {
    const address = await providerContract.getYourTokenAddress();
    return address;
  };

  return (
    <factoryContext.Provider
      value={{
        withDraw,
        createTokens,
        purchaseTokens,
        PriceCalculator,
        getTokenAddress,
      }}
    >
      {children}
    </factoryContext.Provider>
  );
};

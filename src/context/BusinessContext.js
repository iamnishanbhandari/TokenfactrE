import { createContext, useContext } from "react";
import { useProvider, useSigner, useAccount } from "wagmi";
import { BTabi } from "../constants";
import { Contract, Signer, utils } from "ethers";
import Swal from "sweetalert2";

const businessContext = createContext();
export const useCampaign = () => {
  return useContext(businessContext);
};

const generateContract = async (address, obj) => {
  const contract = new Contract(address, BTabi, obj);
  return contract;
};

export const BusinessProvider = ({ children }) => {
  const { address } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  /**
   * @argument {*}contractAdd --> deployed address of the business token contract
   */
  const makePurchase = async (contractAdd, amount) => {
    const contract = await generateContract(contractAdd, signer);
    contract1.makePurchase({ value: fund }).then(async (tx) => {
      tx.wait(1).then(() => {
        Swal.fire({
          icon: "success",
          title: "SuccssFul Donation!",
          showConfirmButton: false,
          timer: 2500,
        });
      });
    });
  };

  return (
    <businessContext.Provider
      value={{
        makePurchase,
      }}
    >
      {children}
    </businessContext.Provider>
  );
};

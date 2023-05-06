import {
  factoryAbi,
  factoryAddress,
  STabi,
  STaddress,
  BTabi,
} from "../constants";
import { Contract } from "ethers";

/**
 * @description applied for both custom hook
 *
 * @argument{*} obj--> signer or provider
 * @returns contract instance with type of obj: signer or provider
 */

export const getFactoryContract = (obj) => {
  try {
    const contract = new Contract(factoryAddress, factoryAbi, obj);
    return contract;
  } catch (e) {
    console.log("unable to create contract instance", e);
  }
};

export const getBusinessContract = (deployedAddress, obj) => {
  try {
    const contract = new Contract(deployedAddress, BTabi, obj);

    return contract;
  } catch (e) {
    console.log("unable to create contract instance", e);
  }
};

export const getSTContract = (obj) => {
  try {
    const contract = new Contract(STaddress, STabi, obj);

    return contract;
  } catch (e) {
    console.log("unable to create  contract instance", e);
  }
};

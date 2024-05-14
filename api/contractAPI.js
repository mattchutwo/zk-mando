import { ethers } from 'ethers';
import getWeb3 from './getWeb3';
import contractABI from './contractABI.json';

const contractAddress = "ContractAddressHere";

export async function submitExploit(exploitData, proof) {
  const signer = await getWeb3(true);
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const transaction = await contract.submitExploit(ethers.utils.toUtf8Bytes(exploitData), proof);
  await transaction.wait();
  return transaction.hash; // return transaction hash for tracking
}

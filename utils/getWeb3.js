import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "rinkeby", // Adjust according to the network your contract is deployed on
  cacheProvider: true, // Optional: Enable or disable cache provider
  providerOptions, // required
});

export async function getProviderOrSigner(needSigner = false) {
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);

  if (needSigner) {
    const signer = provider.getSigner();
    return signer;
  }

  return provider;
}

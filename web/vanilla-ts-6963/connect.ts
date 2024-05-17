// Assuming you have a basic setup for TypeScript compilation

async function connectToMetaMask() {
    if (!window.ethereum) { // Check if MetaMask is installed
      console.error('Please install MetaMask to use this app.');
      return;
    }
  
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to MetaMask account:', accounts[0]);
    } catch (error) {
      console.error(error);
    }
  }
  
  document.getElementById('connectWallet')?.addEventListener('click', connectToMetaMask);
  
# Usage
* Run `git submodule update --init --recursive` to initialize all submodules*
* Run `cd cheese`
* Run `docker build --platform linux/x86_64 -f cheesecloth/Dockerfile -t cheesecloth-image .` to build the docker image
* Run `docker run --platform linux/x86_64 -it cheesecloth-image:latest  /bin/bash` to run the docker image
* Run `./scripts/run_grit` to run the grit example

Note: Ran on M1 Pro chip running Sonoma 14.4.1  

# zk-Mando (aka. BoutyGuardian Program - ZK Bug Bounty Program)

BountyGuardian protocol utilizes a novel proof compiler 'CHEESECLOTH' that verifies the authenticity of vulnerabilities, and integrates it with smart contracts developed into a zero knowledge decentralized application complemented by a white hat reputation system. We aim to enhance incentives for exploit resolution through token rewards and stake deposits from vendors, alongside an on-chain reputation system that allows participants to build their credibility as they engage in bug bounty programs. By cryptographically proving their knowledge of specific software vulnerabilities without revealing the actual exploit itself, white hats can enhance their trustworthiness. This system ensures that while other verifiers on the chain verify the proof, they remain unaware of the exploit details, thus guarded the vendor's privacy and system security.

The Project structure shown as below: 
![alt text](https://github.com/mattchutwo/zk-mando/blob/main/Work%20Flow.png)

The main contributions of BountyGuardian protocol are shown as: 
1. Merkle tree-based on-chain reputation system which authenticates the reputation of users at the same time facilitates an early-staged credit based blockchain ecosystem. 
![Reputation Flow](https://github.com/mattchutwo/zk-mando/blob/main/Reputation%20Flow.png)

The verified proofs of exploits are submitted to the Merkle tree, and simultaneously, the submitters of these exploits gain reputation and are able to prove their reputation through reviewing the exploitID, which in turn facilitates further rewards. 

2. Smart contract-driven incentive mechanism which encourages timely and fair responses from vendors to reported vulnerabilities, using Bug Bounty tokens. 

3. ZK submission and verification processes which allows hackers to submit vulnerabilities anonymously yet verifiably using ZK proofs, meanwhile provide the opportunities to review vulnerabilities on transparent logs after a predetermined time frame.
   
The SubmitExploit procedure allows users to submit an exploit along with a generated proof (using CHEESECLOTH protocol as mentioned before). It generates a unique exploitID, verifies the proof using a separate verifier contract, validates the Merkle proof against a stored Merkle root, and updates the submitter's reputation if the Merkle proof is valid. The exploit data is then recorded, tokens are transferred for the submission reward and deposit hold, and events are emitted to signal the submission and verification. The submission procedure is demonstrated as following: 
submit(userWalletAddr,Proofexploit) → Verify(Proofexploit)

As shown, users wallet addresses would be recorded for further processes. After verifiers verify the proof of exploit using CHEESECLOTH witness protocols, then the smart contract would generate an ‘exploitID’ which would be further used in the ResolveExploit procedure. In this procedure, BountyGuardian hashes the user wallet address, pseudo random number generator results, which takes in a number picked by the verifier, and a number selected by user, aka white hat hacker in this scenario, thus it will be a commitment by the verifiers, which prevents the double-spending problem. 

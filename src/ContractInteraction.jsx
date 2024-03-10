import { ethers } from "ethers";
import { useState, useEffect } from "react";

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_candidateNames",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "_durationInMinutes",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllVotesOfCandiates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRemainingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVotingStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingEnd",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingStart",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

function ContractInteraction() {
    const [contract, setContract] = useState('');
    const [candidate, setCandidate] = useState('');
    const [addedCandidate, setAddedCandidate] = useState('')

    const connectWeb3 = async () => {
        // Connect to web3 provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0x76B55EC7C28335BC68e05063D1401f4f6AE1bc4e", abi, signer);
        setContract(contract);
    };

    const addCandidate = async () => {
        if (!contract || !candidate) return;
        try {
            const tx = await contract.addCandidate(candidate);
            const receipt = await tx.wait(); // Wait for transaction confirmation
            console.log('Transaction hash', receipt.transactionHash);
            console.log("Candidate added successfully!");
            setAddedCandidate(candidate);
        } catch (error) {
            console.error('Error adding candidate:', error);
        }
    };

    return (
        <>
            <div>
                <h1>Vote</h1>
                <button onClick={connectWeb3}>Connect to MetaMask</button>
            </div>
            {contract && (
                <div>
                    <input type="text" placeholder="Enter Candidate name" value={candidate} onChange={(e) => setCandidate(e.target.value)}></input>
                    <button className="connected-button" onClick={addCandidate}>Add Candidate</button>
                </div>
            )}
            {addedCandidate && (
                <div>
                    <p>Candidate '{addedCandidate}' added successfully!</p>
                </div>
            )}
        </>
    );
}

export default ContractInteraction;
// import { useState } from "react";
// import { ethers } from "ethers";

// const abi = [
//     // Your contract ABI
// ];

// function ContractInteraction() {
//     const [contract, setContract] = useState(null);
//     const [candidate, setCandidate] = useState('');
//     const [addedCandidate, setAddedCandidate] = useState('');

//     const connectMetaMask = async () => {
//         if (typeof window.ethereum === 'undefined') {
//             console.error('MetaMask is not installed');
//             return;
//         }

//         try {
//             // Request MetaMask account access
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const signer = provider.getSigner();
//             const contract = new ethers.Contract("0x76B55EC7C28335BC68e05063D1401f4f6AE1bc4e", abi, signer);
//             setContract(contract);
//         } catch (error) {
//             console.error('Error connecting to MetaMask:', error);
//         }
//     };

//     const addCandidate = async () => {
//         if (!contract || !candidate) return;
//         try {
//             const tx = await contract.addCandidate(candidate);
//             await tx.wait(); // Wait for transaction confirmation
//             setAddedCandidate(candidate);
//         } catch (error) {
//             console.error('Error adding candidate:', error);
//         }
//     };

   
// }

// export default ContractInteraction;

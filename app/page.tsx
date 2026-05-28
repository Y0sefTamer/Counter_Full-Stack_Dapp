"use client";
import { useEffect } from "react";
import { useWriteContract, useReadContract, useWaitForTransactionReceipt } from "wagmi";

// 1. Extract contract configuration outside the component for cleaner code
const CONTRACT_ADDRESS = "0x95e2234d031222726cec87f21bcc17c438fd6a8b" as `0x${string}`;
const CONTRACT_ABI = [
  { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
  { inputs: [], name: "decreament", outputs: [], stateMutability: "nonpayable", type: "function" },
  { inputs: [], name: "increament", outputs: [], stateMutability: "nonpayable", type: "function" },
  { inputs: [], name: "reset", outputs: [], stateMutability: "nonpayable", type: "function" },
] as const;

export default function Home() {
  // Read data from the smart contract
  const { data: counterData, isPending: isReadPending, refetch, error: readError } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "counter",
  });

  // Write data (send transactions to the smart contract)
  const { data: hash, writeContract, isPending: isWritePending, error: writeError } = useWriteContract();

  // Track the transaction status on the blockchain
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Automatically refetch the counter value once the transaction is confirmed
  useEffect(() => {
    if (isConfirmed) {
      refetch();
    }
  }, [isConfirmed, refetch]);

  // Button interaction handlers
  const handleIncrement = () => writeContract({ address: CONTRACT_ADDRESS, abi: CONTRACT_ABI, functionName: "increament" });
  const handleDecrement = () => writeContract({ address: CONTRACT_ADDRESS, abi: CONTRACT_ABI, functionName: "decreament" });
  const handleReset = () => writeContract({ address: CONTRACT_ADDRESS, abi: CONTRACT_ABI, functionName: "reset" });

  // Global loading state to disable buttons during transactions
  const isLoading = isWritePending || isConfirming;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 font-sans">
      {/* Wallet Connection Section */}
      <div className="absolute top-4 right-4 flex gap-4">
        <w3m-network-button />
        <w3m-button connect-text="Connect Wallet" connected-text="Connected" />
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Smart Contract Counter</h1>
        
        {/* Counter Display */}
        <div className="text-6xl font-black text-blue-600 mb-8 bg-blue-50 py-6 rounded-xl">
          {isReadPending ? (
            <span className="text-2xl text-gray-400 animate-pulse">Loading...</span>
          ) : (
            counterData?.toString() || "0"
          )}
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button 
            onClick={handleDecrement} 
            disabled={isLoading}
            className="w-16 h-16 flex items-center justify-center text-3xl bg-red-100 text-red-600 rounded-full hover:bg-red-200 disabled:opacity-50 transition-colors"
          >
            -
          </button>
          
          <button 
            onClick={handleReset} 
            disabled={isLoading}
            className="px-6 py-4 text-lg font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 disabled:opacity-50 transition-colors"
          >
            Reset
          </button>

          <button 
            onClick={handleIncrement} 
            disabled={isLoading}
            className="w-16 h-16 flex items-center justify-center text-3xl bg-green-100 text-green-600 rounded-full hover:bg-green-200 disabled:opacity-50 transition-colors"
          >
            +
          </button>
        </div>

        {/* Transaction Status & Errors */}
        <div className="h-10">
          {isWritePending && <p className="text-sm text-yellow-600 font-medium">Please confirm in your wallet...</p>}
          {isConfirming && <p className="text-sm text-blue-600 font-medium animate-pulse">Waiting for transaction to confirm...</p>}
          {isConfirmed && <p className="text-sm text-green-600 font-medium">Transaction confirmed! 🎉</p>}
          {(readError || writeError) && (
            <p className="text-sm text-red-500 font-medium mt-2">
              Error: {writeError?.message?.split('\n')[0] || readError?.message?.split('\n')[0] || "Something went wrong"}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
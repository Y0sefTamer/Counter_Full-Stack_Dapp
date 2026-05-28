# ⚡ Web3 Counter DApp



A modern, responsive, and fully functional Web3 Decentralized Application (DApp) built to interact with a smart contract. This project demonstrates seamless wallet integration, reading state from the blockchain, and executing smart contract transactions (writing data) directly from the frontend.



## ✨ Features



- **Wallet Integration:** Connect your crypto wallet easily using Web3Modal / WalletConnect.

- **Real-time Blockchain Reads:** Fetches and displays the current counter value from the smart contract.

- **Smart Contract Interactions:** Execute transactions to `increment`, `decrement`, or `reset` the counter.

- **Transaction Tracking:** Provides real-time UI feedback for transaction states (Pending in wallet ➔ Confirming on blockchain ➔ Confirmed).

- **Modern UI/UX:** Clean and responsive interface built with Tailwind CSS.



## 🛠️ Tech Stack



- **Framework:** [Next.js](https://nextjs.org/) (React)

- **Web3 Library:** [Wagmi](https://wagmi.sh/) (React Hooks for Ethereum)

- **Wallet Connection:** [Web3Modal / WalletConnect](https://walletconnect.com/)

- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

- **Language:** TypeScript / JavaScript



## 📜 Smart Contract Information



The smart contract for this DApp is deployed and verified on the blockchain.



- **Contract Address:** `0x95e2234d031222726cec87f21bcc17c438fd6a8b`

- **Network:** [e.g., Sepolia Testnet / Polygon Amoy] *(Change this to your actual network)*

- **Core Functions:**

  - `counter()`: View function returning the current count.

  - `increament()`: Increases the counter by 1.

  - `decreament()`: Decreases the counter by 1.

  - `reset()`: Resets the counter to 0.



## 📸 Preview



*(Tip: Add a screenshot or a short GIF of your working DApp here to make the README more engaging!)*

<!-- ![App Screenshot](./public/screenshot.png) -->



## 🚀 Getting Started



Follow these steps to run the project locally on your machine.



### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.



### Installation



1. **Clone the repository:**

```bash

   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

   cd your-repo-name
```

**Install dependencies:**

```Bash



npm install

# or

yarn install
```

**Set up Environment Variables:**

Create a .env.local file in the root directory and add your WalletConnect Project ID:
```
 NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
```
**Run the development server:**

```Bash



npm run dev

# or

yarn dev
```
**Open the app:**

Navigate to http://localhost:3000 in your browser to see the application running.

## 💡 What I Learned

Building this project was a great hands-on experience in Web3 frontend development. I learned how to:



Set up a Next.js environment for Web3.

Handle blockchain state management using Wagmi hooks (useReadContract, useWriteContract).

Implement safe transaction lifecycle monitoring (useWaitForTransactionReceipt).

Create a user-friendly UI for loading and error states during blockchain interactions.

# 🤝 Let's Connect

LinkedIn: [\[ LinkedIn \]](https://www.linkedin.com/in/yoseftamer/)

X: [\[Profile\]](https://x.com/dkyosef200)
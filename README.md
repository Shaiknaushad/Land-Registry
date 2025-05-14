
# 🌍 Land Registration DApp

A decentralized application (DApp) built with Solidity, Hardhat, and Ethers.js to securely register and view land ownership on the Ethereum blockchain.

## 🚀 Project Overview

This DApp enables users to:
- Register land by providing a unique land ID and location.
- View all registered lands with owner details.
- Interact with MetaMask to handle Ethereum wallet connection and transactions.

Everything is stored securely and immutably on the blockchain.

---

## 🔧 Technologies Used

- **Solidity** – Smart Contract Language  
- **Hardhat** – Ethereum development framework  
- **Ethers.js** – JavaScript library for blockchain interaction  
- **MetaMask** – Wallet and blockchain connector  
- **HTML/CSS/JavaScript** – Frontend

---

## 📦 Smart Contract

```solidity
function registerLand(uint256 _id, string memory _location) public;
function getLand(uint256 _id) public view returns (string memory, address);
````

The contract allows any user to register a land with a unique ID and fetch land details by ID.

---

## ⚙️ How to Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/land-registration-dapp.git
cd land-registration-dapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile the Contract

```bash
npx hardhat compile
```

### 4. Start Local Blockchain

```bash
npx hardhat node
```

### 5. Deploy Contract

In a separate terminal:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 6. Run the Frontend

Open `index.html` using **Live Server** (VSCode extension) or:

```bash
npx live-server
```

---

## 💻 How to Use

1. Open the DApp in your browser.
2. Click “Connect MetaMask” and approve the connection.
3. Enter land details and register.
4. See a live list of all registered lands with their IDs, locations, and owners.

---

## 🔐 Security

This project is meant for **educational/demo purposes**. Do not use it in production without enhancements like:

* Input validations
* Ownership access controls
* Gas optimizations

---

## 🤝 Contributing

Pull requests and suggestions are welcome!
Feel free to fork and enhance this project.

---

## 📄 License

MIT License © 2025
Author: [Your Name](https://github.com/Shaiknaushad)


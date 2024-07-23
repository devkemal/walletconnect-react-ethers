import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal } from '@web3modal/ethers/react';
import { ethersConfig, projectId, mainnet, sepolia, localhost } from "./configs/WalletConnect";
import App from "./App";

if (!projectId) throw new Error("Project ID is not defined");

createWeb3Modal({
  ethersConfig,
  chains: [mainnet, sepolia, localhost],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

import { defaultConfig } from '@web3modal/ethers/react';

export const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
export const sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'SepoliaETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com'
}

export const localhost = {
  chainId: 31337,
  name: 'localhost',
  currency: 'LocalETH',
  explorerUrl: 'http://localhost:8545/',
  rpcUrl: 'http://127.0.0.1:8545/'
}

export const projectId = process.env.REACT_APP_PROJECT_ID;
if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

export const ethersConfig = defaultConfig({
  metadata,
})

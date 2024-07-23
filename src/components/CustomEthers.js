import {
  useWeb3Modal,
  useDisconnect,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

export default function CustomEthers() {
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <>
      {isConnected ? (
        <button onClick={() => disconnect()}>Disconnect ({address})</button>
      ) : (
        <button onClick={() => open()}>Connect Wallet</button>
      )}
    </>
  );
}

import Connect from "./components/Connect";
import CustomEthers from "./components/CustomEthers";
import { BrowserProvider, Contract } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
  useWeb3ModalError,
  useWeb3ModalState,
  useSwitchNetwork,
} from "@web3modal/ethers/react";
import Storage from "./abis/Storage.json";

//css
import "./App.css";

const App = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { error } = useWeb3ModalError();
  const { open, selectedNetworkId } = useWeb3ModalState();
  const { switchNetwork } = useSwitchNetwork();

  const storeNumber = async (num) => {
    // const asd = switchNetwork(11155111);
    // asd
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    try {
      await switchNetwork(11155111);

      const provider = new BrowserProvider(walletProvider);
      const signer = await provider.getSigner();
      const contract = new Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        Storage.abi,
        signer
      );

      console.log(Number(await contract.retrieve()));

      contract
        .store(num)
        .then(async (result) => {
          const receipt = await result.wait();
          console.log(receipt);
        })
        .catch((e) => console.error(e));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("modal err:", error, open, selectedNetworkId);

  return (
    <div className="App">
      Next To react
      <Connect />
      <CustomEthers />
      <p>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      </p>
      <button onClick={() => storeNumber(5)}>Store Number</button>
    </div>
  );
};

export default App;

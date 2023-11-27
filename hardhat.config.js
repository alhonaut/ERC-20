require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = 'PRIVATE_KEY'
const GOERLI_RPC_URL = 'GOERLI_RPC_URL'


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.20",

};

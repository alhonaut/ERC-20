require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = '3a0fce958b2ec479436207ee9019db45242d26092b1055a0b44ce2a467e668b8'
const GOERLI_RPC_URL = 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'


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

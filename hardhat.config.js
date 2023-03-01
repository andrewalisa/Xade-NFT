require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

require("dotenv").config();

const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [PRIVATE_KEY],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY,
      bsc: BSCSCAN_API_KEY,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

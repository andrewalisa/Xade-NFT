# Xade Diamond Premium Subscriptions NFT Hardhat Project

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Deploying to Mainnet

Create a copy of `.env.example` and rename that to `.env` and put in your environment variables

In the Hardhat Deploy file, make sure that the Hardhat.Config.js file and your .env file has all of the correct values and settings.

Then run:

```sh
npx hardhat run --network localhost scripts/deploy.js
```

# Verifying Contract

Makes sure that your .env file has the correct API key from EtherScan (or another block explorer such as PolygonScan)

In the Hardhat Deploy file, make sure that the Hardhat.Config.js file and your .env file has all of the correct values and settings.

Then run:

```sh
npx hardhat verify --network evm_network --contract "contracts/XadeDiamondPremiumSubscriptionsNFT.sol:XadeDiamondPremiumSubscriptionsNFT" replaceWithContractAddressHere
```

- Replace `evm_network` with the evm network you deployed to
- Replace `replaceWithContractAddressHere` with the contract address

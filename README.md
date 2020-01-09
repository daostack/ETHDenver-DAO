# ETHDenver-DAO

ETHDenver DAO is a DAO for the ETHDenver Conference and Hackathon. This repo is configuring and deploying the ETHDenver DAO.

## Architecture

The DAO is based on DAOstack's [Arc platform](https://github.com/daostack/arc), and using the [Infra platform](https://github.com/daostack/infra) for decision making, based on [Holographic Consensus](https://medium.com/daostack/holographic-consensus-part-1-116a73ba1e1c).

A Rinkeby example for the DAO was deployed, with its Avatar on address [0xfa0646b726ba94840eb3cd77095d46da775ad3ed](https://rinkeby.etherscan.io/address/0xfa0646b726ba94840eb3cd77095d46da775ad3ed). The complete addresses and deployment logs can be found [here](https://github.com/daostack/ETHDenver-DAO/blob/master/logs/model-19-12-19.txt).

**Rinkeby deployment links**

- [Avatar](https://rinkeby.etherscan.io/address/0xFA0646b726BA94840Eb3CD77095D46da775ad3eD)
- [Reputation](https://rinkeby.etherscan.io/address/0x96B4d8983CBD1abBF6b8C4C8C2B967DBA932fB0B)
- [Token](https://rinkeby.etherscan.io/address/0x216fa326101C050113027d1122D5F407eFB60D98)
- [Controller](https://rinkeby.etherscan.io/address/0xB81D66B905D1908b12598130e21460e72DF07508)
- Reputation bootstrap schemes
  - [ReputationFromToken](https://rinkeby.etherscan.io/address/0x6D2b8Afc7567eDa5Aafcb095Dc34fbBBAc0f8cc9)
- Governance schemes
  - [Contribution reward (Ext)](https://rinkeby.etherscan.io/address/0x42D9b123cDB73085272805eCaFD781a5fc0bFcFd)
  - [Competition](https://rinkeby.etherscan.io/address/0xDbB0e75821898Fe29f688C4fE6d2FB7df0f0E8b4)

### Contracts

The dao contracts are based on [arc version 0.0.1-rc.36](https://github.com/daostack/arc/releases/tag/0.0.1-rc.36)

## Deployment (test)

1. `npm i`

2. `npm run migrate_test -- --private-key <PRIVATE_KEY> --provider https://mainnet.infura.io/v3/<infuraKey>`

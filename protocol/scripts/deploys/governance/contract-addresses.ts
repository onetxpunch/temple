import { network } from "hardhat";

export interface DeployedContracts {
    MULTISIG: string;
    TEMPLAR_NFT: string;
    ELDER_ELECTION: string;
    TEMPLAR_METADATA: string;
}

export const DEPLOYED_CONTRACTS: { [key: string]: DeployedContracts } = {
    gnosisChiado: {
        MULTISIG: '0x1A88587a9b48f92000a68250b190Afb786BadFE5',  // This is a new random wallet - ask frontier if you need the private key.
        TEMPLAR_NFT: '',
        ELDER_ELECTION: '',
        TEMPLAR_METADATA: '',
    },
    gnosis: {
        MULTISIG: '',
        TEMPLAR_NFT: '',
        ELDER_ELECTION: '',
        TEMPLAR_METADATA: '',
    },
    goerli: {
        MULTISIG: '0x3a320fF715dCBbF097e15257B7051dd08fdfb7A2',

        TEMPLAR_NFT: '0xE037235c5EF0dDbDDb558195C26b250c2F6EE947',
        // yarn hardhat verify --network goerli 0xE037235c5EF0dDbDDb558195C26b250c2F6EE947

        ELDER_ELECTION: '0xee16C73a3e2D9699f9D58220EAF8AeAea3940788',
        // yarn hardhat verify --network goerli 0xee16C73a3e2D9699f9D58220EAF8AeAea3940788 0xE037235c5EF0dDbDDb558195C26b250c2F6EE947

        TEMPLAR_METADATA: '0xa5e99790BB1417A07B7fdBFe3F353A72D2EC2cFf',
        // yarn hardhat verify --network goerli 0xa5e99790BB1417A07B7fdBFe3F353A72D2EC2cFf 0xE037235c5EF0dDbDDb558195C26b250c2F6EE947

    },
    localhost: { 
        MULTISIG: '0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199', // Account #19
        TEMPLAR_NFT: process.env.TEMPLAR_NFT || '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        ELDER_ELECTION: process.env.ELDER_ELECTION || '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
        TEMPLAR_METADATA: process.env.TEMPLAR_METADATA || '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    },
};

export function getDeployedContracts(): DeployedContracts {
    if (DEPLOYED_CONTRACTS[network.name] === undefined) {
      console.log(`No contracts configured for ${network.name}`);
      throw new Error(`No contracts configured for ${network.name}`);
    } else {
      return DEPLOYED_CONTRACTS[network.name];
    }
}

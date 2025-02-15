import '@nomiclabs/hardhat-ethers';
import { ethers, network } from 'hardhat';
import { TempleTeamPayments__factory } from '../../../typechain';
import {
  DeployedContracts,
  DEPLOYED_CONTRACTS,
  expectAddressWithPrivateKey,
  toAtto,
} from '../helpers';

async function main() {
  expectAddressWithPrivateKey();
  const [owner] = await ethers.getSigners();

  let DEPLOYED: DeployedContracts;

  if (DEPLOYED_CONTRACTS[network.name] === undefined) {
    console.log(`No contracts configured for ${network.name}`);
    return;
  } else {
    DEPLOYED = DEPLOYED_CONTRACTS[network.name];
  }

  // Set gasPrice manually instead of using deployAndMine/mine()
  const gasPrice = ethers.utils.parseUnits('15', 'gwei');

  const templeTeamPaymentsFactory = new TempleTeamPayments__factory(owner);
  const startDate = Math.round(Date.now() / 1000);
  const templeTeamPayments = await templeTeamPaymentsFactory.deploy(
    DEPLOYED.TEMPLE,
    10, // although no vesting, but has to be at least 1 second vesting else division by zero error
    startDate,
    {
      gasPrice,
    }
  );
  console.log(
    `Deployed... waiting for transaction to mine: ${templeTeamPayments.deployTransaction.hash}`
  );
  await templeTeamPayments.deployed();
  console.log('Contract deployed');
  console.log(
    `yarn hardhat verify --network ${network.name} ${templeTeamPayments.address} ${DEPLOYED.TEMPLE} 10 ${startDate}`
  );

  const allocs: { [address: string]: number } = {
    '0xECD71BAF7F3113324fA03391ce78accBebAbe190': 17809,
    '0xE9e073dC07bd0a7b825108683b5ac095dD2eCE60': 47492,
    '0x86d8F7a5CB5558F89a4c639Cf69E4221505aa1f3': 53428,
    '0x49F29f02947F609f1b3779A293B106215d4434d5': 53428,
    '0xA1D0Ff488595Eb262c086A344421a43717F8fCAF': 5000,
    '0xF9B4De4bB735ACE677813ac8E24B6530B2D595E9': 7956,
    '0x072d76b501E364FCA58B6A7fe16a88c74D64924c': 3978,
    '0xF94A14fdEbf75007329E50f0aC9f459fF566B157': 9622,
    '0x228900C0263B6Ac19E66fF491E30c83d3473a2d8': 16950,
    '0xe345e9605391c13Fd2502e7141D54b752AaDB184': 41555,
    '0x87997a32A5Ba852D95CFC7c803B3b3371B223aE2': 29682,
    '0x62370003cEbacd6415d32375095FFc8AB7238eBC': 7956,
    '0x54120e6f4379A525AcC5aE7DBbf6758c271b8b15': 84630,
    '0xbbbEd1aC44706Cf8E82788a1Eda98418981Eb798': 4277,
    '0x4e51F68940FaC327B2f018B6b79109031031fe8b': 11761,
    '0x3AC87eD1BEDB341f97656d5f24EDDEf7Fc810811': 34000,
    '0x0D44463bfB16A7Af95D8D873b7233Efe247816cd': 25175,
    '0xA0483f29E325108A34c2A385c999C2FeF08d4Af7': 11761,
    '0x2acfd61F1ccbE5F8fF1fF34a6eC2958685b8Fc89': 29203,
    '0x248e5c90143E6E283E5c45387b10D91049C390c8': 3207,
    '0x5245859F78bb510aB9c8A4Ce74506Ec1F7D24DD3': 40000,
    '0xe5D74520A77EDaa6Fff050975775213FA01948c9': 90245,
    '0xfED4FEd3C90C4e93D203D25EF2B148C863b68356': 56450,
    '0x588282ADA5B9D872d0eBF506c5C1b541e2a60BBa': 41555,
    '0x389E3d1c46595aF7335F8C6D3e403ce2E8a9cf8A': 1069,
    '0x542aAF07235D8c01589C9A87D0871aB990272C33': 90245,
    '0x0c9C3Ba64072eb566b0E9A4B6Bb0D7B204d68469': 1069,
    '0x0F511FE5Dcdb54b0b19A5A2a57E76977Ae728C15': 19700,
    '0xF2E1A88af3D6cDdD60B9c43CeE53d655cBa40b2c': 5936,
    '0x27E9578BD639A2876636A0DDEfFeb7bd4b539003': 7000,
    '0x06e6F9DE62afa6F2Ca092Fe17fF57dAc3Ae30db1': 39500,
    '0x7f068d2890bD5ce602DCB9d040515306d067cA02': 34562,
    '0x73E29Bb563592610a4DdDfbeEFC0259E3A27e410': 5346,
    '0x387a652c87A2571b93EF4dECc61BEB74A5970582': 11761,
    '0x294A29Ad8842E7234EE16B1b16f1F98747B715Eb': 3207,
    '0x3f0e5DbC6093E8773F14f0186FFE32F733C34ef7': 6415,
    '0xDCeC3b61fFB8b946A5c07129F3855adDc7077ad6': 2144,
    '0x7DaE5d7aA1abb5EcFA8BE12D0C5E9A84F0e5C7CA': 1069,
    '0xDC884904D07d201c54D1aa5D0AD509E4eE289eAe': 4277,
    '0xF225d51037eBcC32B3347184A89a10F1FF3e58df': 17809,
    '0x5623fE10b48B8455e4573F0D80EfD7E60C10559D': 2138,
    '0x628Cd2FB44514dCF2Ef73B6C5D3DBb2c1b972071': 59364,
    '0x779731032c24356199a7baaFae20f4271c0Ccc80': 35657,
    '0x6c55f411bF02B68478844b1148a0daB92Cd1D5aE': 65301,
    '0xC377aA172e2308203877A4404877bf6c738467D7': 23746,
    '0xe107f0FfB7FBC701b00CEcc3E8d003339E271b93': 10048,
    '0x9743b92460fC79F070D2059D6C533bE84A1dd493': 77174,
    '0x0AAA67dcbBD86dBd1F0c260F50fb9FB3A941138A': 3207,
    '0x5a71Db7011bE6452CE46bEb8b14e9bdBA0F781Cb': 22600,
    '0x056c7b90255cA73EF674F75d9653bB5d947c4C9E': 7484,
    '0x8BBF709345fA5f6FDB451f95D398EBbCE1750A51': 101523,
    '0xc505b44033766B5006499645de31061c89c38a08': 28201,
    '0x6672Ab62eB5A4d973B2c11B905019bD2d28c7b77': 117527,
    '0x563b5faD1574FAE07C3Be6AE240993c2a1C9573d': 65700,
    '0xC3fA25D4795AceAe8ac90A15dD5858E7Ac2E2811': 59300,
    '0xdFc51E445CfCa135F15307C5197C73B64095B6B2': 84602,
    '0x1DCa58133802F56D8608F3cDC9F7D878D119845f': 84447,
    '0x550C9C724CE6Dc478bF381De27c2533df35AcBDE': 88600,
    '0x107Be0E7280f07d7e2842c06f1301Cc0E688416e': 86400,
  };

  console.log('Setting allocations');
  const tx1 = await templeTeamPayments.setAllocations(
    Object.keys(allocs),
    Object.values(allocs).map((a) => toAtto(a)),
    {
      gasPrice,
    }
  );
  await tx1.wait();
  console.log('Mined');

  console.log('Transferring owner');
  const tx2 = await templeTeamPayments.transferOwnership(DEPLOYED.MULTISIG, {
    gasPrice,
  });
  await tx2.wait();
  console.log('Mined');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

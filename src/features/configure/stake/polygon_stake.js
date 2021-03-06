import { govPoolABI } from '../abi';

export const polygonStakePools = [
  {
    id: 'coink-polygon',
    name: 'COINK',
    logo: 'single-assets/COINK.png',
    token: 'COINK',
    tokenDecimals: 18,
    tokenAddress: '0xFbdd194376de19a88118e84E279b977f165d01b8',
    tokenOracle: 'tokens',
    tokenOracleId: 'COINK',
    earnedToken: 'MATIC',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    earnContractAddress: '0xDeB0a777ba6f59C78c654B8c92F80238c8002DD2',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WMATIC',
    partnership: false,
    status: 'active',
    hideCountdown: true,
    partners: [
      {
        logo: 'stake/piggybank/piggybankfinance.png',
        logoNight: 'stake/piggybank/piggybankfinance_night.png',
        background: 'stake/piggybank/background.png',
        text: "You probably already knew that Piggybank Vault is the most trusted multi-chain yield optimizer. But did you know that Piggybank has its own token? COINK has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own COINK token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our Polygon vaults. That's a lot of Matic that goes straight to our COINK holders. All you have to do is stake your COINK in this vault, it’s that simple, come back and harvest your Matic whenever you need it!",
        website: 'https://vault.piggybankone.finance',
        social: {
          telegram: 'http://t.me/piggybankonevault',
          twitter: 'https://twitter.com/piggybankonevault',
        },
      },
    ],
  },
  {
    id: 'pig_jetswap-pwings',
    name: 'JetSwap',
    logo: 'polygon/USDC-USDT.png',
    token: 'pigJetSwapUSDC-USDT',
    tokenDecimals: 18,
    tokenAddress: '0x93c9f29CF2496e73f3d8b07055e2359267207147',
    tokenOracle: 'lps',
    tokenOracleId: 'jetswap-poly-usdc-usdt',
    earnedToken: 'pigJetSwapPWINGS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xa55e8326a9AC7B0bFcA5E6Fc9Cf1141E2dc11f67',
    earnContractAddress: '0x9231457582c0E6F3c631e93AEA2d063F59606710',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'pWINGS',
    partnership: true,
    status: 'active',
    isPigStaked: true,
    periodFinish: 1626566247,
    partners: [
      {
        logo: 'stake/jetswap/logo.png',
        background: 'stake/jetswap/background.png',
        text: 'Jetswap is a decentralized Automated Market Maker (AMM) on Polygon with low fees and instant trade execution. Trade from the comfort of your own wallet! Trade directly from your favorite wallet application! There are no accounts to set up or trading limits. You have full control over your assets and Jetswap has 0 control over your assets. You can earn BIG WINGS rewards when you deposit your Jetswap WINGS-LP to the WINGS farm. The WINGS LP tokens generate trading fees for the depositor! Even if there is not a supported WINGS farm you can still earn a percentage of every trading fee.',
        website: 'https://polygon.jetswap.finance/',
        social: {
          telegram: 'https://t.me/jetfuelfinance',
          twitter: 'https://twitter.com/Jetfuelfinance',
        },
      },
    ],
  },
];

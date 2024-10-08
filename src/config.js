const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;


const namePrefix = "LimeMans";
const description = "TryingSomeThings";
const baseUri = "ipfs://QmdwWypneY1EmsWobwkGZDnYXwPYd6PpyDfQXo5iBcmZLK";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, 
  external_url: "https://opensea.io/collection/tryingsome",
  creators: [
    {
      address: "0x0312aDA27Be3135E3A16e6B5B1f5464e6b13dF99",
      share: 100,
    },
  ],
};


const layerConfigurations = [
  {
    growEditionSizeTo: 50
    ,
    layersOrder: [
      { name: "Shine" },
      { name: "Background" },
      { name: "Bottom lid" },
     
      
      
      
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

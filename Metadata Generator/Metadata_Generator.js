const fs = require("fs");

function generateMetadata(number, attributeType) {
  let PROJECT_CONFIG_METADATA = {
    name: `Xade Gold Premium Subscriptions NFT #${number}`,
    symbol: "XGLD",
    description: `Xade Gold Premium Subscriptions NFT #${number}`,
    image: `ipfs://bafybeif2tcif3qlorhjuzvp6psiegspxnchqtzr7bek33bakwgm3nyjxcq`,
    animation_url: `ipfs://bafybeigsnl56hqqh6euekmr7cjhz3xdvxcrvnalgni6tscere4mrlkdtqu`,
  };

  // Commenting out attributes since we are not using this, but I am keeping the code in here just in case we need this for the future
  //let ATTRIBUTES = {};

  //PROJECT_CONFIG_METADATA.attributes = ATTRIBUTES.attributes;

  return PROJECT_CONFIG_METADATA;
}

function main() {
  let generateMetadataOutput;

  let tokenIdStart = 1;
  let tokenIdEnd = 500;

  let attributeType = "";

  for (i = tokenIdStart; i < tokenIdEnd + 1; i++) {
    generateMetadataOutput = generateMetadata(i, attributeType);

    // console.log(generateMetadataOutput);
    fs.writeFileSync(
      `./Metadata/${i}.json`,
      JSON.stringify(generateMetadataOutput, null, 2)
    );
  }
}

main();

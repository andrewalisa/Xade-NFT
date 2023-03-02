const fs = require("fs");

function generateMetadata(number, attributeType) {
  let PROJECT_CONFIG_METADATA = {
    name: `Xade Diamond Premium Subscriptions NFT #${number}`,
    symbol: "XADE",
    description: `Xade Diamond Premium Subscriptions NFT #${number}`,
    image: `ipfs://Qmf9hZcnav1RYZ4bActVR1ZirB2hwhnVYAg4wD6HxTdroi`,
    animation_url: `ipfs://bafybeidmlstqbzdlmhyxanseaw4jkcdfdcwjcvwxmtn7vw4v4rvmbw5ala`,
  };

  // Commenting out attributes since we are not using this, but I am keeping the code in here just in case we need this for the future
  //let ATTRIBUTES = {};

  //PROJECT_CONFIG_METADATA.attributes = ATTRIBUTES.attributes;

  return PROJECT_CONFIG_METADATA;
}

function main() {
  let generateMetadataOutput;

  let tokenIdStart = 1;
  let tokenIdEnd = 100;

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

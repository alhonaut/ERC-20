const hre = require("hardhat");

async function main() {
  console.log("Deploying contract...");

  // Deploy the contract
  const FICEToken = await hre.ethers.deployContract("FICEToken");

  // Wait for the transaction to be mined
  await FICEToken.waitForDeployment();

  // Log the address of the deployed contract
  console.log("Contract deployed to:", FICEToken.target);
}

// Execute the script and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
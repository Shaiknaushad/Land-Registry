async function main() {
  const LandRegistry = await ethers.getContractFactory("LandRegistry");
  const land = await LandRegistry.deploy();
  console.log("LandRegistry deployed to:", land.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
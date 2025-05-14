const contractAddress = "PASTE_DEPLOYED_ADDRESS_HERE";
const contractABI = [
  "function registerLand(uint256,string)",
  "function getLand(uint256) view returns (string,address)"
];

async function registerLand() {
  const id = document.getElementById("landId").value;
  const location = document.getElementById("location").value;

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    await contract.registerLand(id, location);
    alert("Land Registered!");
  }
}

async function getLand() {
  const id = document.getElementById("getId").value;

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const land = await contract.getLand(id);
    document.getElementById("output").innerText = `Location: ${land[0]}, Owner: ${land[1]}`;
  }
}
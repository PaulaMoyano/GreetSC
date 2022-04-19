const Token = await ethers.getContractFactory("Greeter");
const token = await Token.deploy("Greeter");

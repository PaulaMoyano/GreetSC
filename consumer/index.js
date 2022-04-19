// const contract = require('../artifacts/contracts/Greeter.sol/Greeter.json')
const web3 = new Web3()

const contract = new web3.eth.Contract({}, 'PRIVATE_KEY')
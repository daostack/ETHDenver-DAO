'use strict';
require('dotenv').config();
if (process.env.provider === undefined) {
  console.log("please define network provider at .env file");
  process.exit(1);
}

if (process.env.privateKey === undefined) {
  console.log("please define privateKey at .env file");
  process.exit(1);
}

if (process.env.startIndex === undefined) {
  console.log("please define startIndex of the array at .env file");
  process.exit(1);
}

if (process.env.reputationAdminAddress === undefined) {
  console.log("please define reputationAdminAddress at .env file");
  process.exit(1);
}

if (process.env.amountOfRepToMint === undefined) {
  console.log("please define amountOfRepToMint at .env file");
  process.exit(1);
}

var fs = require('fs');


const Web3 = require('web3');
const web3 = new Web3(process.env.provider);


async function start() {
  try {
    const account = await web3.eth.accounts.privateKeyToAccount(process.env.privateKey);
    await web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
  } catch (e) {
    spinner.fail(`Could not obtain an account for migration. Please specify a valid 'private-key' or 'mnemonic'`);
    console.error(e);
    process.exit(1);
}
console.log("default",web3.eth.defaultAccount);

var beneficiaries = fs.readFileSync('scripts/beneficiaries.txt').toString().split("\n");
const ReputationAdmin = require("./ReputationAdmin.json");
var  reputationAdmin = new web3.eth.Contract(ReputationAdmin.abi, process.env.reputationAdminAddress);

var startIndex = parseInt(process.env.startIndex);
var batchSize = 100;
for (var i= startIndex;i< beneficiaries.length;i=i+batchSize) {
  console.log("send from index", i ,"to",i+batchSize);
  if (i+batchSize > beneficiaries.length) {
      batchSize = beneficiaries.length - i;
  }
  var beneficiariesArray = beneficiaries.slice(i,i+batchSize);
  var amountArray = new Array(beneficiariesArray.length);
  amountArray.fill(web3.utils.toWei(process.env.amountOfRepToMint, "ether"));
  await reputationAdmin.methods.reputationMint(beneficiariesArray,amountArray)
    .send({
        from: web3.eth.defaultAccount,
        gasLimit: 10000000,
        gasPrice: 1000000000,
      });
  console.log("done");
 }
 }

module.exports = {
    start
};

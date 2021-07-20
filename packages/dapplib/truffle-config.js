require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad guess knee off sound'; 
let testAccounts = [
"0xb048f75c905f608f682b20c2e862a856c370d09002d3c170fbd8831b5dfa5389",
"0x1aa29ac77bda551ea93735e1caace014ddfefd57d85f8443c51268838aceb021",
"0x37f7a347149fa9afcd009dcb32591c531ece57c97fbd3bf339855d941cd01de6",
"0x54a7e8b0cf41d26c30c32fb0580ab29b91bbfe43211772f6180e9334be76ca96",
"0x480355915ab0ad467e25b3e042735fe2e3c29fb45c47b484e29539efaf0fb7c2",
"0xe45baa9f461b9b0790771f39c9fc7b8c9fe1c50b7a5c7e20a5c8110450af1bb2",
"0xf3c10d10cb3045ff2b283c2fc1569d8f5b226ae10993aeee7c1600be607111e8",
"0xe23322c83569e2f57ab36d4fecc035d0eaa1e1b3c92f3ddb194dc9c0cf94d8a1",
"0x167ec6be480c322ac1dd122839d34fb095ffce0ef5754d70e4ed5f6b4c87a2cf",
"0x8e4de7c6a13e92e4418b33ea5ecf53da5171b9283528e1ab5f8285618a3eb249"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


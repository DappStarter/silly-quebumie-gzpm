require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strike rival night exchange hope enroll equal giant'; 
let testAccounts = [
"0x315fc19d7e6ee4272a5e9027e95d42757cb720422686a359d1a7cd91069bc855",
"0x4148b99933a57dd5a5b45cb9d826ef7a0c239c4337489e4c4bca120de0d75ac7",
"0x217a0e2429cc8153f18c2a0f2708f678114ff18c9467b85d109db20f022d1d1a",
"0x91bed400d4b819c7d1b3b9ec654942d694d7888690ded1c41befd903a9e62809",
"0xffe2ca2ede2603febe97e2ffddba0841eb17d8a45806e5b576f7e575c561e2d9",
"0xd03bf5b10e79100e71a37c3d12a98aacd2ab4220c2829d2081535b48f5558a17",
"0xe5ae3d930c901704d2db0055a7c97470ba28326f5fba061e28c8e6617bc58903",
"0x79d9477d5f251376a4deb855af844601dd0f23369fe29ab4fa93f20539dcb050",
"0x04d6b12fd6c46e5abd37ed90b35e39b09f000eff15a7c3f3558b1c48eef4dafc",
"0x0ef78ca4bf3d1804aca5fe8c9b617e61c404b072274de55e90bc8ac202cc4586"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


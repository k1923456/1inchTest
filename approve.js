const Web3 = require("web3");
const fetch = require("node-fetch");
const yesno = require("yesno");

const chainId = 137; // Chain ID for Binance Smart Chain (BSC)
const web3RpcUrl = "https://polygon.llamarpc.com"; // URL for BSC node
const walletAddress = "0x99512942bd80B0C1b82C990430D272d60215cc79"; // Your wallet address
const privateKey = "0x...xxx"; // Your wallet's private key. NEVER SHARE THIS WITH ANYONE!

// Construct full API request URL
function apiRequestUrl(methodName, queryParams) {
    return apiBaseUrl + methodName + "?" + new URLSearchParams(queryParams).toString();
}

// Post raw transaction to the API and return transaction hash
async function broadCastRawTransaction(rawTransaction) {
    return fetch(broadcastApiUrl, {
        method: "post",
        body: JSON.stringify({ rawTransaction }),
        headers: { "Content-Type": "application/json", Authorization: "Bearer spxAi17E4Hy425ORdMKlkBZx8CEbUhnv" },
    })
        .then((res) => res.json())
        .then((res) => {
            return res.transactionHash;
        });
}

// Sign and post a transaction, return its hash
async function signAndSendTransaction(transaction) {
    const { rawTransaction } = await web3.eth.accounts.signTransaction(transaction, privateKey);

    return await broadCastRawTransaction(rawTransaction);
}

(async () => {
    const swapParams = {
        src: "0x111111111117dc0aa78b770fa6a738034120c302", // Token address of 1INCH
        dst: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", // Token address of DAI
        amount: "100000000000000000", // Amount of 1INCH to swap (in wei)
        from: walletAddress,
        slippage: 1, // Maximum acceptable slippage percentage for the swap (e.g., 1 for 1%)
        disableEstimate: false, // Set to true to disable estimation of swap details
        allowPartialFill: false, // Set to true to allow partial filling of the swap order
    };

    const broadcastApiUrl = "https://api.1inch.dev/tx-gateway/v1.1/" + chainId + "/broadcast";
    const apiBaseUrl = "https://api.1inch.dev/swap/v5.2/" + chainId;
    const web3 = new Web3(web3RpcUrl);
    const headers = { headers: { Authorization: "Bearer YOUR_API_KEY", accept: "application/json" } };

    const allowance = await checkAllowance(swapParams.src, walletAddress);
    console.log("Allowance: ", allowance);


})();
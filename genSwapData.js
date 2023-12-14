const axios = require("axios");

(async function httpCall() {

    const url = "https://api.1inch.dev/swap/v5.2/137/swap";

    const config = {
        headers: {
            "Authorization": "Bearer spxAi17E4Hy425ORdMKlkBZx8CEbUhnv"
        },
        params: {
            "src": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "dst": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
            "amount": "1000000000000000000",
            "from": "0x99512942bd80B0C1b82C990430D272d60215cc79",
            "slippage": "1"
        }
    };


    try {
        const response = await axios.get(url, config);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
})();
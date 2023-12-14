const axios = require("axios");

(async function httpCall() {

    const url = "https://api.1inch.dev/token/v1.2/137/search";

    const config = {
        headers: {
            "Authorization": "Bearer spxAi17E4Hy425ORdMKlkBZx8CEbUhnv"
        },
        params: {
            "query": "dai",
        }
    };


    try {
        const response = await axios.get(url, config);
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error(error);
    }
})();
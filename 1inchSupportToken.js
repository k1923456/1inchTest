const axios = require("axios");

(async function httpCall() {

  const url = "https://api.1inch.dev/swap/v5.2/137/tokens";

  const config = {
      headers: {
  "Authorization": "Bearer spxAi17E4Hy425ORdMKlkBZx8CEbUhnv"
},
      params: {}
  };
      

  try {
    const response = await axios.get(url, config);
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(error);
  }
})();
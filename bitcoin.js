const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
};

axios.request(options).then(function (response) {
  const price = response.data.bitcoin.usd;
  const message = `The current price of Bitcoin is ${price} USD.`
  prompt(message);
}).catch(function (error) {
  console.error(error);
});

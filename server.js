const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/price", (req, res) => {
  axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => {
      const price = response.data.bpi.USD.rate;
      res.status(200).json({ price });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

function fetchPrice() {
  axios
    .get("/api/price")
    .then(response => {
      const price = response.data.price;
      const message = `The current Bitcoin price is ${price} USD.`;
      alert(message);
    })
    .catch(error => {
      console.error(error);
      alert("Failed to fetch Bitcoin price.");
    });
}

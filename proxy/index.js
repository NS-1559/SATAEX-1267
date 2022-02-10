const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const baseAPIUrl = "http://localhost:8000";
const ccxt = require('ccxt');


async function walletMain(walletKey, action) {
  const binance = new ccxt.binance(
    {
      apiKey: 'KS0Kqr4tBLjH2hT4CD6gHwZXaadx2V3apNqeiW9tnAhceX24Hbqeo9aaZVHLYSKF',
      api_key: 'KS0Kqr4tBLjH2hT4CD6gHwZXaadx2V3apNqeiW9tnAhceX24Hbqeo9aaZVHLYSKF',
      secret:'rdHRqRrY4u6HpeXx01ZoeLsu59EnnKDAlXeO1Umk66HBmKYku4HMv20olDj0rFqC'
    }
  );

  binance.setSandboxMode(true);
  const balance = await binance.fetchBalance();
    
  
  console.log(balance);

  return balance;
}



app.use(cors());
app.use(bodyParser.json());

// auth
app.use("/api/*", async (req, res) => {
  const { method, originalUrl, headers, body } = req;

  const requestConfigs = {
    method,
    url: `${baseAPIUrl}${originalUrl ?? "/"}`,
    data: body,
  };

  headers.authorization
    ? (requestConfigs.headers.authorization = headers.authorization)
    : (requestConfigs.headers = {});

  try {
    const response = await axios(requestConfigs);
    res.set(response.headers);
    return res.status(response.status).send(response.data);
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});

// test binance bot
app.use("/test", async (req, res) => {
  const { method, originalUrl, headers, body } = req;
  console.log(body)
  try {
    const data = await walletMain(body, null);
    
    return res.json(data)
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

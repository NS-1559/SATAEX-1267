const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const baseAPIUrl = "http://localhost:8000";
const ccxt = require('ccxt');



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
app.use("/test/getBalance", async (req, res) => {
  const { method, originalUrl, headers, body } = req;
  console.log(body)
  try {
    const data = await getBalance(body);
    
    return res.json(data)
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});



// market order
app.use("/test/makeMarketOrder", async (req, res) => {
  const { body } = req;
  const {wallet, tokenSymbol, direction, quantity} = body;
  try {
    const order = await createMarketOrder(wallet, tokenSymbol, direction, quantity);
    return res.json(order)
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});

// market order
app.use("/test/makeLimitOrder", async (req, res) => {
  const { body } = req;
  const {wallet, tokenSymbol, direction, quantity, orderPrice} = body;
  try {
    const order = await makeLimitOrder(wallet, tokenSymbol, direction, quantity, orderPrice);
    return res.json(order)
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});



app.listen(port, () => console.log(`App listening on port ${port}!`));







// wallet function

async function getBalance(walletKey) {
  const binance = new ccxt.binance(
    {
      ...walletKey
    }
  );

  binance.setSandboxMode(true);
  const balance = await binance.fetchBalance();

  return balance;
}

async function createMarketOrder(wallet, tokenSymbol, direction, quantity) {

 
  const binance = new ccxt.binance(
    {
      ...wallet
    }
  );
  

  binance.setSandboxMode(true);
  const order = await binance.createMarketOrder(`${tokenSymbol}/USDT`, direction, quantity);
  return order;
}


async function makeLimitOrder(wallet, tokenSymbol, direction, quantity, orderPrice) {

  
  const binance = new ccxt.binance(
    {
      ...wallet
    }
  );
  

  binance.setSandboxMode(true);
  const order = await binance.createLimitOrder(`${tokenSymbol}/USDT`, direction, quantity,orderPrice);
  return order;
}

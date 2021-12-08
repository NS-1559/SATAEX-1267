const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const baseAPIUrl = "http://localhost:8000";

app.use(cors());
app.use(bodyParser.json());
app.use("/*", async (req, res) => {
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
    const response = await axios({
      method: "POST",
      url: "http://localhost:8000/api/auth/login",
      data: { email: "user@gmail.com", password: "User1234" },
    });
    res.set(response.headers);
    return res.status(response.status).send(response.data);
  } catch (err) {
    return res.status(err.status ?? 500).send(err.message);
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

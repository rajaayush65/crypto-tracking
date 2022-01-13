const cryptoModel = require("../models/crypto-model");
const axios = require("axios");

createCryptos = async (req, res) => {
  await cryptoModel.deleteMany({}).catch((err) => {
    console.log(err);
  });

  var cryptoCurrencies = [];

  axios.get("https://api.wazirx.com/api/v2/tickers").then((data) => {
    const cryptosDatas = data.data;
    Object.values(cryptosDatas)
      .slice(0, 10)
      .map((item) => {
        cryptoCurrencies.push(item);
      });
    cryptoModel
      .insertMany(cryptoCurrencies)
      .then(() => {
        return res.status(201).json({
          success: true,
          message: "Data Added Successfully",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: err,
        });
      });
  });
};

getCryptos = async (req, res) => {
  await cryptoModel
    .find({})
    .then((data) => {
      return res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: err,
      });
    });
};

module.exports = {
  createCryptos,
  getCryptos,
};

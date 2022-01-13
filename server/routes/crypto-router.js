const express  = require("express");

const cryptoCtrl = require("../controllers/crypto-ctrl")

const router = express.Router();

router.get("/cryptos",cryptoCtrl.getCryptos);
router.post("/cryptos",cryptoCtrl.createCryptos);

module.exports = router;
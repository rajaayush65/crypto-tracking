const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptoModel = new Schema({
  base_unit: { type: String },
  quote_unit: { type: String },
  low: { type: Number },
  high: { type: Number },
  last: { type: String },
  type: { type: String },
  open: { type: Number },
  volume: { type: String },
  sell: { type: String },
  buy: { type: String },
  at: { type: String },
  name: { type: String },
});

module.exports = mongoose.model("cryptoModel", cryptoModel);

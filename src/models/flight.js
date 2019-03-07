const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const FlightSchema = new Schema({
  id  : { type : Number, required: false },
  model    : { type : String, required: true, trim: true },
  MSN    : { type : Number, required: true, trim: true },
  harnessLen    : { type : Number, required: true, trim: true },
  grossWt    : { type : Number, required: true, trim: true },
  atmPress    : { type : Number, required: true, trim: true },
  roomTemp    : { type : Number, required: true, trim: true },
  airport    : { type : String, required: true, trim: true },
  fuelCapLt    : { type : Number, required: true, trim: true },
  fuelCapRt    : { type : Number, required: true, trim: true },
  fuelQtyLt    : { type : Number, required: true, trim: true },
  fuelQtyRt    : { type : Number, required: true, trim: true },
  maxAlt    : { type : Number, required: true, trim: true },
  fltNo    : { type : String, required: true, trim: true }
});

module.exports = mongoose.model('Flight', FlightSchema, 'flights');
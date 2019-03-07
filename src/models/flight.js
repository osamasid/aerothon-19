const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const FlightSchema = new Schema({
  id  : { type : Number, required: false },
  model    : { type : String, required: true, trim: true },
  MSN    : { type : Number, required: true, trim: true },
  harnessLen    : { type : Number, required: false, trim: true },
  grossWt    : { type : Number, required: false, trim: true },
  atmPress    : { type : Number, required: false, trim: true },
  roomTemp    : { type : Number, required: false, trim: true },
  airport    : { type : String, required: false, trim: true },
  fuelCapLt    : { type : Number, required: false, trim: true },
  fuelCapRt    : { type : Number, required: false, trim: true },
  fuelQtyLt    : { type : Number, required: false, trim: true },
  fuelQtyRt    : { type : Number, required: false, trim: true },
  maxAlt    : { type : Number, required: false, trim: true },
  fltNo    : { type : String, required: false, trim: true }
});

mongoose.set('useCreateIndex', true);

FlightSchema.index({
  MSN: 1,
}, {
  unique: true,
});

module.exports = mongoose.model('Flight', FlightSchema, 'flights');
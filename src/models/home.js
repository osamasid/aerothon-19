const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const HomeSchema = new Schema({
  timestamp   : { type : Date, required: true },
  headline : { type : String, required: true, trim: true },
  text         : { type :  String, required: true, trim: true }
});

module.exports = mongoose.model('Home', HomeSchema);


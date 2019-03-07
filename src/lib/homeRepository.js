const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Home = require('../models/home');

class HomeRepository {
   
    getHome(callback) {
        console.log('*** HomeRepository.getHome');
        Home.find({}, {}, { sort: { timestamp: -1 } }, (err, home) => {
            if (err) { 
                console.log(`*** HomeRepository.getHome err: ${err}`); 
                return callback(err); 
            }
            callback(null, home);
        });
    }
}

module.exports = new HomeRepository();


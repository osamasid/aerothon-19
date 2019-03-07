const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Flight = require('../models/flight');

class FlightsRepository {

    // get all the customers
    getFlights(callback) {
        console.log('*** FlightsRepository.getFlights');
        Flight.count((err, custsCount) => {
            let count = custsCount;
            console.log(`flights count: ${count}`);

            Flight.find({}, (err, flights) => {
                if (err) { 
                    console.log(`*** FlightsRepository.getflights error: ${err}`); 
                    return callback(err); 
                }
                callback(null, {
                    count: count,
                    flights: flights
                });
            });

        });
    }

    getPagedFlights(skip, top, callback) {
        console.log('*** FlightsRepository.getPagedFlights');
        Flight.count((err, flightCount) => {
            let count = flightCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Flight count: ${count}`);

            Flight.find({})
                    .sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, flights) => {
                        if (err) { 
                            console.log(`*** FlightsRepository.getPagedFlights error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            flights: flights
                        });
                    });

        });
    }

    // // get the customer summary
    // getFlightsSummary(skip, top, callback) {
    //     console.log('*** FlightsRepository.getFlightsSummary');
    //     Customer.count((err, custsCount) => {
    //         let count = custsCount;
    //         console.log(`Customers count: ${count}`);

    //         Customer.find({}, { '_id': 0, 'firstName': 1, 'lastName': 1, 'city': 1, 'state': 1, 'orderCount': 1, 'gender': 1 })
    //                 .skip(skip)
    //                 .limit(top)
    //                 .exec((err, customersSummary) => {
    //                     callback(null, {
    //                         count: count,
    //                         customersSummary: customersSummary
    //                     });
    //                 });

    //     });
    // }

    // get a  customer
    getFlight(id, callback) {
        console.log('*** FlightsRepository.getFlight');
        Flight.findById(id, (err, flight) => {
            if (err) { 
                console.log(`*** FlightsRepository.getFlight error: ${err}`); 
                return callback(err); 
            }
            callback(null, flight);
        });
    }

    // insert a  customer
    insertFlight(body, callback) {
        console.log('*** FlightsRepository.insertFlight');   
        let flight = new Flight();

        console.log('The body is '+ body);

        flight.id = body.id;
        flight.model = body.model;
        flight.MSN = body.MSN;
        flight.harnessLen = body.harnessLen;
        flight.grossWt = body.grossWt;
        flight.atmPress = body.atmPress;
        flight.roomTemp = body.roomTemp;
        flight.airport = body.airport;
        flight.fuelCapLt = body.fuelCapLt;
        flight.fuelCapRt = body.fuelCapRt;
        flight.fuelQtyLt = body.fuelQtyLt;
        flight.fuelQtyRt = body.fuelQtyRt;  
        flight.maxAlt = body.maxAlt;
        flight.fltNo = body.fltNo;
        
        console.log(flight);

        flight.save((err, flight) => {
            if (err) { 
                console.log(`*** FlightsRepository insertFlight error: ${err}`); 
                return callback(err, null); 
            }

            callback(null, flight);
        });
    }

    updateFlight(id, body, state, callback) {
        console.log('*** FlightsRepository.editCustomer');

        let stateObj = { 'id': state[0].id, 'abbreviation': state[0].abbreviation, 'name': state[0].name }

        Flight.findById(id, (err, flight)  => {
            if (err) { 
                console.log(`*** FlightsRepository.editflight error: ${err}`); 
                return callback(err); 
            }

            flight.firstName = body.firstName || flight.firstName;
            flight.lastName = body.lastName || flight.lastName;
            flight.state = stateObj;
            flight.stateId = stateObj.id;


            flight.save((err, flight) => {
                if (err) { 
                    console.log(`*** FlightsRepository.updateFlight error: ${err}`); 
                    return callback(err, null); 
                }

                callback(null, flight);
            });

        });
    }

    // delete a customer
    deleteFlight(id, callback) {
        console.log('*** FlightsRepository.deleteFlight');
        Flight.remove({ '_id': id }, (err, flight) => {
            if (err) { 
                console.log(`*** FlightsRepository.deleteFlight error: ${err}`); 
                return callback(err, null); 
            }
            callback(null, flight);
        });
    }

}

module.exports = new FlightsRepository();
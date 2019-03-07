const homeRepo  = require('../../../lib/homeRepository'),
      util        = require('util');

class HomeController {

    constructor(router) {
        router.get('/', this.getHome.bind(this));
    }

    getHome(req, res) {
        console.log('*** getHome');

        homeRepo.getHome((err, data) => {
            if (err) {
                console.log('*** getHome error: ' + util.inspect(err));
                res.json({
                    home: null
                });
            } else {
                console.log('*** getHome ok');
                res.json(data);
            }
        });
    }

}

module.exports = HomeController;
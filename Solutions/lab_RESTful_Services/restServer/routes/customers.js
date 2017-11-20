var express = require('express');
var router = express.Router();
var fs = require('fs');

var customers = JSON.parse(fs.readFileSync('data/customer.json'));
console.log(customers);


/* GET customers listing. */
router.get('/api/customers', function(req, res, next) {
  res.send('respond with a resource');
});

/*
router.get("/api/customers", function(request, response) {
    response.sendFile(path.resolve(__dirname, "customers.json"));
});

*/

module.exports = router;

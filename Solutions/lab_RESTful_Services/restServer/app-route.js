var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require('fs');
var cors = require('cors')
var app = express();

var customers = JSON.parse(fs.readFileSync('data/customer.json'));
console.log(customers);
var nextCustomerId = -1;
for (cust of customers) {
	if (cust.customerId > nextCustomerId) {
		nextCustomerId = cust.customerId + 1;
	}
}

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//
router.use(function(request, response, next) {
    var now = new Date();
    console.log("%s [%s] %s %s %s %s",
        now.getTime(),
        now.toDateString(),
        request.method,
        request.url,
        request.path,
        request.user
    );
    next();
});

router.use("/", function(request, response, next) {
    response.send("<h1>Hello, Admin</h1>");
    next();
});

app.use("/admin", router);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get("/", function(request, response) {
    response.send("<h1>Hello, World (root-level) </h1>");
});

app.options('/customers/', cors());

app.options('/customers/:id', cors());

app.get("/api/customers", cors(), function(request, response) {
    //response.sendFile(path.resolve(__dirname, "./data/customer.json"));
    response.json(customers);
});

app.get("/api/customers/:id", cors(), function(request, response) {
    console.log("Looking for customerID: " + request.params['id']);
    customer = findById(request.params['id']);
    //response.sendFile(path.resolve(__dirname, "./data/customer.json"));
    response.json(customer);
});

app.post("/api/customers", cors(), function(request, response) {
	let customer = request.body;
	customer.customerId = ++nextCustomerId;
    customers.push(customer);
    response.json(customer);
});

function findById(customerId) {
	for (custIdx in customers) {
		if (customerId == customers[custIdx].customerId) {
			return customers[custIdx];
		}
	}
	return null;
}

app.put("/api/customers", cors(), function(request, response) {
	let updateCust = request.body;
	for (custIdx in customers) {
    		let cust = customers[custIdx];
		if (cust.customerId == updateCust.customerId) {
			customers[custIdx] = updateCust;
			response.json(customers[custIdx]);
			return;
		}
	}
    	response.json(null); // 404
});

app.delete("/api/customers", cors(), function(request, response) {
    let delCust = request.body;
    console.log("Deleting: ");
    console.log(delCust);
    for (custIdx in customers) {
        let cust = customers[custIdx];
        if (cust.customerId == delCust.customerId) {
            customers.splice(custIdx, 1);
            response.json(delCust);
            return;
        }
    }
    response.json(null); // 404
});

app.delete("/api/customers/:id", cors(), function(request, response) {
    let custId = request.params['id'];
    let delCust = findById(custId);
    console.log("Deleting: " + custId);
    console.log(delCust);
    for (custIdx in customers) {
        let cust = customers[custIdx];
        if (cust.customerId == custId) {
            customers.splice(custIdx, 1);
            response.json(delCust);
            return;
        }
    }
    response.json(null); // 404
});

//var port = (process.env.EXPRESS_PORT) ? process.env.EXPRESS_PORT : 1701;
var port = process.env.EXPRESS_PORT || 1701;
app.listen(port, function() {
    console.log("Express Server started on port " + port);
});



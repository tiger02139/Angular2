var express = require('express');
var router = express.Router();

/* GET hiworld page. */
router.get('/hiworld', function(req, res, next) {
  res.render('hiworld', { title: 'Express!' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Pets Home Page' });
});

/* GET Petlist page. */
router.get('/petlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('petlist', {
            "petlist" : docs
        });
    });
});

/* GET Petlist2 page. */
router.get('/petlist2', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
		res.render('petlist2', {
            "petlist2" : docs
        });
    });
});

/* Process Single Pet page by also sending the productname. */
router.get('/editpet/:productId', function(req, res) {
	var	name = "productId";
    var value = Number(req.params.productId);

    var query = {};
    query[name] = value;
	
    var db = req.db;
   
    var collection = db.get('usercollection');
    collection.findOne(query,{}, function(e,docs){

        res.render('editpet', { productId : docs.productId, productName : docs.productName, description : docs.description,
		    price : docs.price, starRating : docs.starRating, imageUrl : docs.imageUrl
        });	
    });
});

/* GET New Pet page. ******************************************************************/
router.get('/newpet', function(req, res) {
    res.render('newpet', { title: 'Add New Pet' });
});
/* GET New Pet page. ******************************************************************/


/* POST to Add Pet Service ********************************************************************/
router.post('/addpet', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. 
    var productName = req.body.productName;
    var description = req.body.description;
    var price = req.body.price;
    var starRating = req.body.starRating;
	var imageUrl = req.body.imageUrl;
	
    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "productName" : productName,
        "description" : description,
		"price" : price,
        "starRating" : starRating,
		"imageUrl" : imageUrl
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("petlist");
        }
    });
});

/* Just POST Petlist page. */
router.post('/updatepet', function(req, res) {
        res.redirect("petlist");
});

/* POST to Update Pet Service */
router.post('/updatepet2', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
	var productId = req.body.productId;
    var productName = req.body.productName;
    var description = req.body.description;
    var price = req.body.price;
    var starRating = req.body.starRating;
	var imageUrl = req.body.imageUrl;
	
	//res.send(productName);
	
    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.update(
	{productId: productId},
	{
		$set: {
            productName : productName,
            description : description,
		    price : price,
            starRating : starRating,
		    imageUrl : imageUrl
		}
	
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("petlist");
        }
    });
});

module.exports = router;

var DbService = require('/models/dbService'); 
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
	app.post('/mdealer', function(req, res) {
		res.sendfile('./public/views/masterDealer.html');
	});

	app.post('/dealer', function(req, res) {
		res.sendfile('./public/views/dealer.html');
	});

	app.post('/retailer', function(req, res) {
		res.sendfile('./public/views/retailer.html');
	});

	app.post('/test', DbService.ServiceAddMasterDealer);

	app.post('/loginValidate', function(req, res) {
       console.log(req.body);

		var username = req.body.uname;
        var password = req.body.pwd;

        if(username == "3004" && password == "88848") {
		 
           res.sendfile('./public/views/masterDealer.html');
		} else if(username == "2005" && password == "88848") {
		   res.sendfile('./public/views/dealer.html');	
		} else if(username == "100637" && password == "88848") {
           res.sendfile('./public/views/retailer.html');
		} else {
			res.send("Error Page not found");
		}
  });

};
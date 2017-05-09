var DbService = require('./models/dbservice'); 
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
	app.post('/addMasterDealer', DbService.AddMasterDealer);
	app.post('/deleteMasterDealer', DbService.DeleteMasterDealerbyId);
	app.post('/editMasterDealer', DbService.EditMasterDealerbyId);
	app.post('/getMasterDealer', DbService.GetAllMasterDealers);

	app.post('/addDealer', DbService.AddDealer);
	app.post('/deleteDealer', DbService.DeleteDealerbyId);
	app.post('/editDealer', DbService.EditDealerbyId);
	app.post('/getDealerByMId', DbService.GetDealersbyMasterId);

	app.post('/addRetailer', DbService.AddRetailer);
	app.post('/deleteRetailer', DbService.DeleteRetailerbyId);
	app.post('/editRetailer', DbService.EditRetailerById);
	app.post('/getRetailerByDId', DbService.GetRetailerByDealerId);
	app.post('/getRetailerByMId', DbService.GetRetailerByMasterId);

	app.post('/getRetailerType', DbService.GetAllRetailerType);
	app.post('/addRetailerType', DbService.AddNewRetailerType);
	app.post('/editRetailerType', DbService.EditRetailerTypebyId);
	app.post('/deleteRetailerType', DbService.DeleteRetailerTypebyId);

	app.post('/addScheme', DbService.AddNewScheme);
	app.post('/editScheme', DbService.EditSchemebyId);
	app.post('/deleteScheme', DbService.DeleteSchemebyId);
	app.post('/getScheme', DbService.GetSchemebyType);

	app.post('/addTransaction', DbService.AddNewTransaction);
	app.post('/deleteTransaction', DbService.DeleteTransactionbyId);
	app.post('/editTransaction', DbService.EditTransactionbyId);
	app.post('/getTransaction', DbService.GetTransactionByDateAndUserId);

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
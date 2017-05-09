var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : 'Telecom@123',  
  database : 'TelecomDB'  
});  

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});  

function AddMasterDealer(name, mobile, state, city, email, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme) {
  var sql = "INSERT INTO MasterDealer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + "','" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteMasterDealerbyId(id) {
  var sql = "DELETE FROM MasterDealer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditMasterDealerbyId(id, name, mobile, state, city, email, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme) {
  var sql = "UPDATE MasterDealer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "', Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

function GetAllMasterDealers() {
  connection.query("SELECT * FROM MasterDealer", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

//-----------------

function AddDealer(name, mobile, state, city, emailID, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme, parentMasterDealerId) {
  var sql = "INSERT INTO Dealer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme, ParentMasterDealerId) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + "','" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "'," + parentMasterDealerId + ")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteDealerbyId(id) {
  var sql = "DELETE FROM Dealer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditDealerbyId(id, name, mobile, state, city, email, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme, parentMasterDealerId) {
   var sql = "UPDATE Retailer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "',  Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "', parentMasterDealerId = " + ParentMasterDealerId + " WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

function GetDealersbyMasterId(masterid) {
  connection.query("SELECT * FROM Dealer WHERE ParentMasterDealerId = " + masterid + "", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

//------------

function AddRetailer(name, mobile, state, city, email, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme, parentDealerId, parentMasterDealerId) {
  var sql = "INSERT INTO Retailer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme, ParentDealerId, ParentMasterDealerId) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + ",'" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "',"+ parentDealerId +"," + parentMasterDealerId + ")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteRetailerbyId(id) {
  var sql = "DELETE FROM Retailer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditRetailerById(id, name, mobile, state, city, email, balance, loginStatus, address, retailerType, panNo, pinCode, landline, contactPerson, scheme, parentDealerId, parentMasterDealerId) {
  var sql = "UPDATE Retailer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "',  Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "', parentDealerId = " + parentDealerId + ",  parentMasterDealerId = " + parentMasterDealerId + " WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

function GetRetailerByDealerId(dealerid) {
  connection.query("SELECT * FROM Retailer WHERE ParentDealerId = " + dealerid + "", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

function GetRetailerByMasterId(masterid) {
  connection.query("SELECT * FROM Retailer WHERE ParentMasterDealerId = " + masterid + "", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

//------------

function GetAllRetailerType() {
   connection.query("SELECT * FROM RetailerType", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

function AddNewRetailerType(name) {
  var sql = "INSERT INTO RetailerType (Name) VALUES ( '" + name + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteRetailerTypebyId(id) {
  var sql = "DELETE FROM RetailerType WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditRetailerTypebyId(id, name) {
  var sql = "UPDATE RetailerType SET Name = '" + name + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

//---------------

AddNewScheme('telecl', 'jncj');

function AddNewScheme(name, type) {
  var sql = "INSERT INTO Scheme (Name, Type) VALUES ( '" + name + "','" + type + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteSchemebyId(id) {
  var sql = "DELETE FROM Scheme WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditSchemebyId(id, name, type) {
  var sql = "UPDATE Scheme SET Name = '" + name + "', Type = '" + type + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

function GetSchemebyType(type) {
   connection.query("SELECT * FROM Scheme WHERE Type = '" + type + "'", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}

function AddNewTransaction(paymentId, userId, paymentDate, paymentTo, userType, transactionType, paymentType, description, remark, creditAmount, debitAmount, balance) {
  var sql = "INSERT INTO Transaction (PaymentId, UserId, PaymentDate, PaymentTo, UserType, TransactionType, PaymentType, Description, Remark, CreditAmount, DebitAmount, Balance) VALUES ( " + paymentId + "," + userId + "," + paymentDate + "," + paymentTo + ",'" + userType + "','" + transactionType + "','" + paymentType + "','" + description + "','" + remark + "'," + creditAmount + "," + debitAmount + "," + balance + ")";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

function DeleteTransactionbyId (paymentId) {
  var sql = "DELETE FROM Transaction WHERE PaymentId = " + paymentId +"";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

function EditTransactionbyId (paymentId, userId, paymentDate, paymentTo, userType, transactionType, paymentType, description, remark, creditAmount, debitAmount, balance) {
  var sql = "UPDATE Transaction SET UserId = " + userId +", PaymentDate = "+ paymentDate + ", PaymentTo = " + paymentTo + ", UserType = '" + userType + "', TransactionType = '" + transactionType + "', PaymentType = '" + paymentType + "', Description = '" + description + "', Remark = '" + remark + "' , CreditAmount = " + creditAmount + ", DebitAmount = " + debitAmount + ", Balance = " + balance + " WHERE PaymentId = " + paymentId +"";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}

function GetTransactionByDateAndUserId (paymentDate, userId) {
   connection.query("SELECT * FROM Transaction WHERE PaymentDate = " + paymentDate + ", AND UserId = " + userId + "", function (err, result) {
    if (err) throw err;
    console.log(result);
  }); 
}
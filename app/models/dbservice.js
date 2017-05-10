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


exports.AddMasterDealer = function (req, res) {
   console.log('add master dealer func');
      var name = req.body.name;
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo;
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;

   var sql = "INSERT INTO MasterDealer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + "','" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "')";
   connection.query(sql, function (err, result) {
     if (err) {
        console.log('unable to add masterDealer');
     };
     console.log("1 record inserted");
   });
  }


exports.DeleteMasterDealerbyId = function (req, res) {
  var id = req.body.id;

  var sql = "DELETE FROM MasterDealer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete masterDealer');
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditMasterDealerbyId = function (req, res) {
      var name = req.body.name;
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo;
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;

  var sql = "UPDATE MasterDealer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "', Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit masterDealer');
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

exports.GetAllMasterDealers = function (req, res) {
  console.log('get all master dealer func');
  connection.query("SELECT * FROM MasterDealer", function (err, result) {
    if (err) {
       console.log('unable to get masterDealer');
    };
    console.log(result);
  }); 
}

//-----------------

exports.AddDealer = function (req, res) {
  var name = req.body.name;
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo;
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;
      var parentMasterDealerId = req.body.parentMasterDealerId;
  
  var sql = "INSERT INTO Dealer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme, ParentMasterDealerId) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + "','" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "'," + parentMasterDealerId + ")";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to add Dealer');
    };
    console.log("1 record inserted");
  });
}

exports.DeleteDealerbyId = function (req, res) {
  var id = req.body.id;

  var sql = "DELETE FROM Dealer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete Dealer');
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditDealerbyId = function (req, res) {
  var name = req.body.name; 
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo;
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;
      var parentMasterDealerId = req.body.parentMasterDealerId;
  
  var sql = "UPDATE Retailer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "',  Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "', parentMasterDealerId = " + ParentMasterDealerId + " WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit Dealer');
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

exports.GetDealersbyMasterId = function (req, res) {
  var masterid = req.body.masterid;
  connection.query("SELECT * FROM Dealer WHERE ParentMasterDealerId = " + masterid + "", function (err, result) {
    if (err) {
       console.log('unable to get Dealers')
    };
    console.log(result);
  }); 
}

//------------

exports.AddRetailer = function (req, res) {
   var name = req.body.name; 
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo;
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;
      var parentDealerId = req.body.parentDealerId;
      var parentMasterDealerId = req.body.parentMasterDealerId;
      
  var sql = "INSERT INTO Retailer (Name, Mobile, State, City, EmailID, Balance, LoginStatus, Address, RetailerType, PanNo, PinCode, Landline, ContactPerson, Scheme, ParentDealerId, ParentMasterDealerId) VALUES ( '" + name + "','" + mobile + "','" + state + "','" + city + "','" + email + "'," + balance + ",'" + loginStatus + "','" + address + "','" + retailerType + "','" + panNo + ",'" + pinCode + "','" + landline + "','" + contactPerson + "','" + scheme + "',"+ parentDealerId +"," + parentMasterDealerId + ")";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to add retailer')
    };
    console.log("1 record inserted");
  });
}

exports.DeleteRetailerbyId = function (req, res) {
  var id = req.body.id;

  var sql = "DELETE FROM Retailer WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete retailer')
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditRetailerById = function (req, res) {
  var name = req.body.name; 
      var mobile = req.body.mobile; 
      var state = req.body.state;
      var city = req.body.city;
      var email = req.body.email; 
      var balance = req.body.balance; 
      var loginStatus = req.body.loginStatus; 
      var address = req.body.address;
      var retailerType = req.body.retailerType; 
      var panNo = req.body.panNo; 
      var pinCode = req.body.pinCode; 
      var landline = req.body.landline; 
      var contactPerson = req.body.contactPerson; 
      var scheme = req.body.scheme;
      var parentDealerId = req.body.parentDealerId;
      var parentMasterDealerId = req.body.parentMasterDealerId;
  
  var sql = "UPDATE Retailer SET Name = '" + name + "', Mobile = '" + mobile + "', State = '" + state + "', City = '" + city + "', EmailId = '" + email + "',  Balance = " + balance + ", LoginStatus = '" + loginStatus + "', Address = '" + address + "', RetailerType = '" + retailerType + "', PanNo = '" + panNo + "', PinCode = '" + pinCode + "', Landline = '" + landline + "', ContactPerson = '" + contactPerson + "', Scheme = '" + scheme + "', parentDealerId = " + parentDealerId + ",  parentMasterDealerId = " + parentMasterDealerId + " WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit retailer')
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

exports.GetRetailerByDealerId = function (req, res) {
  var dealerid = req.body.dealerid;

  connection.query("SELECT * FROM Retailer WHERE ParentDealerId = " + dealerid + "", function (err, result) {
    if (err) {
       console.log('unable to get retailer by dealer id')
    };
    console.log(result);
  }); 
}

exports.GetRetailerByMasterId = function (req, res) {
  var masterid = req.body.masterid;

  connection.query("SELECT * FROM Retailer WHERE ParentMasterDealerId = " + masterid + "", function (err, result) {
    if (err) {
       console.log('unable to add retailer by master id')
    };
    console.log(result);
  }); 
}

//------------

exports.GetAllRetailerType = function (req, res) {
   connection.query("SELECT * FROM RetailerType", function (err, result) {
    if (err) {
       console.log('unable to get retailerType')
    };
    console.log(result);
  }); 
}

exports.AddNewRetailerType = function (req, res) {
  var name = req.body.name;

  var sql = "INSERT INTO RetailerType (Name) VALUES ( '" + name + "')";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to add retailerType')
    };
    console.log("1 record inserted");
  });
}

exports.DeleteRetailerTypebyId = function (req, res) {
  var id = req.body.id;

  var sql = "DELETE FROM RetailerType WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete retailerType')
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditRetailerTypebyId = function (req, res) {
  var id = req.body.id;
  var name = req.body.name;

  var sql = "UPDATE RetailerType SET Name = '" + name + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit retailerType')
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

//---------------

exports.AddNewScheme = function (req, res) {
  var name = req.body.name;
  var type = req.body.type;

  var sql = "INSERT INTO Scheme (Name, Type) VALUES ( '" + name + "','" + type + "')";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to add scheme')
    };
    console.log("1 record inserted");
  });
}

exports.DeleteSchemebyId = function (req, res) {
  var id = req.body.id;

  var sql = "DELETE FROM Scheme WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete scheme')
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditSchemebyId = function (req, res) {
  var id = req.body.id;
  var name = req.body.name;
  var type = req.body.type;

  var sql = "UPDATE Scheme SET Name = '" + name + "', Type = '" + type + "' WHERE Id = " + id + "";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit scheme')
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

exports.GetSchemebyType = function (req, res) {
  var type = req.body.type;

   connection.query("SELECT * FROM Scheme WHERE Type = '" + type + "'", function (err, result) {
    if (err) {
       console.log('unable to get scheme')
    };
    console.log(result);
  }); 
}

//---------------------------

exports.AddNewTransaction = function (req, res) {
  var paymentId = req.body.paymentId;
  var userId = req.body.userId;  
  var paymentDate = req.body.paymentDate;
  var paymentTo = req.body.paymentTo; 
  var userType = req.body.userType;
  var transactionType = req.body.transactionType; 
  var paymentType = req.body.paymentType;
  var description = req.body.description;
  var remark = req.body.remark; 
  var creditAmount = req.body.creditAmount;
  var debitAmount = req.body.debitAmount;
  var balance = req.body.balance;

  var sql = "INSERT INTO Transaction (PaymentId, UserId, PaymentDate, PaymentTo, UserType, TransactionType, PaymentType, Description, Remark, CreditAmount, DebitAmount, Balance) VALUES ( " + paymentId + "," + userId + "," + paymentDate + "," + paymentTo + ",'" + userType + "','" + transactionType + "','" + paymentType + "','" + description + "','" + remark + "'," + creditAmount + "," + debitAmount + "," + balance + ")";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to add Transaction')
    };
    console.log("1 record inserted");
  });
}

exports.DeleteTransactionbyId = function (req, res) {
  var paymentId = req.body.paymentId;
  var sql = "DELETE FROM Transaction WHERE PaymentId = " + paymentId +"";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to delete Transaction')
    };
    console.log("Number of records deleted: " + result.affectedRows);
  });
}

exports.EditTransactionbyId = function (req, res) {
  var paymentId = req.body.paymentId;
  var userId = req.body.userId;  
  var paymentDate = req.body.paymentDate;
  var paymentTo = req.body.paymentTo; 
  var userType = req.body.userType;
  var transactionType = req.body.transactionType; 
  var paymentType = req.body.paymentType;
  var description = req.body.description;
  var remark = req.body.remark; 
  var creditAmount = req.body.creditAmount;
  var debitAmount = req.body.debitAmount;
  var balance = req.body.balance;
  
  var sql = "UPDATE Transaction SET UserId = " + userId +", PaymentDate = "+ paymentDate + ", PaymentTo = " + paymentTo + ", UserType = '" + userType + "', TransactionType = '" + transactionType + "', PaymentType = '" + paymentType + "', Description = '" + description + "', Remark = '" + remark + "' , CreditAmount = " + creditAmount + ", DebitAmount = " + debitAmount + ", Balance = " + balance + " WHERE PaymentId = " + paymentId +"";
  connection.query(sql, function (err, result) {
    if (err) {
       console.log('unable to edit Transaction')
    };
    console.log(result.affectedRows + " record(s) updated");
  });
}

 exports.GetTransactionByDateAndUserId = function (req, res) {
   var paymentDate = req.body.paymentDate; 
   var userId = req.body.userId;

   connection.query("SELECT * FROM Transaction WHERE PaymentDate = " + paymentDate + ", AND UserId = " + userId + "", function (err, result) {
    if (err) {
       console.log('unable to get Transaction')
    };
    console.log(result);
  }); 
}


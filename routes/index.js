var express = require('express');
var router = express.Router();
var request = require('superagent');//Nessie required



/* GET home page. */
router.get('/', function(req, res, next) {
  //request.get('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=14eb8bc8a353786c356e2ab236d923c0').end(function(err, resApi){
      //foo(res.status);
      //res.render(res.body); //do something
      //console.log(key);
      //console.log('You got ATM data!');
      //console.log(resApi.text);
      //request.get('/').query({ ATMList: res.text });
      //res.render(res.body); //do something
      res.render('index', { title: 'Geodeem'});

      //get params for location search
      var params = {
        lat: 35.925797,
        lng: -79.166112,
        rad: 1
      }
      getMerchants(params);
  //});
});

var getMerchants = function(params){
  console.log("Looking for merchants based on", params);
  request.get('http://api.reimaginebanking.com/merchants?lat=' + params.lat + '&lng=' + params.lng +
    '&rad=' + params.rad + '&key=14eb8bc8a353786c356e2ab236d923c0').end(function(err, resApi){
  console.log('You got Merchant Data!');
  console.log(resApi.text);

  //return resApi;
  });
}

var check
//request.get('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=14eb8bc8a353786c356e2ab236d923c0').end(function(err, resApi){
//     //foo(res.status);
//     //res.render(res.body); //do something
//     //console.log(key);
//     console.log('You got ATM data!');
//     console.log(resApi.text);
//     //request.get('/').query({ ATMList: res.text });
//     //res.render(res.body); //do something
//     res.render('index', { title: 'Geodeem', ATMList: resApi.text });
// });
//Nessie API Keys
//var api_keys = require('../API_K.json')
//var key= api_keys.Nessie.Key1;


module.exports = router;

/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

const CONNECTION_STRING = process.env.DB; 

module.exports = function (app) {
  
  MongoClient.connect(CONNECTION_STRING, function(err, db) {

    app.route('/api/issues/:project')

    .get(function (req, res){
      var project = req.params.project;
      console.log(project);
      console.log(req.body);
    })

    .post(function (req, res){
      var project = req.params.project;
      console.log(project);
      console.log(req.body);

    })

    .put(function (req, res){
      var project = req.params.project;
      console.log(project);
      console.log(req.body);
    })

    .delete(function (req, res){
      var project = req.params.project;
      console.log(project);
      console.log(req.body);
    });
    
  });

};


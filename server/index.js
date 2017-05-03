var express = require('express');
var path = require('path');
var db = require('../db/index');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(path.join(__dirname,"../")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/photoUpload",function(req,res){
  var params= [req.body.title, req.body.link];
    var queryStr= 'INSERT INTO photos(photo,link) values(?,?)';
    db.query(queryStr,params,function(err,results){
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(results);
            // do the query to DB and get the photos details back 
            var querystr = 'select * from photos';
            db.query(querystr,function(err,result){
                if (err){
                    console.log(err);
                    res.send(err);
                }
                else{
                    res.send(result);
                }
            })
            
        }
    });
    db.release();
  
});

app.get ("/getPhotos",function(req,res){
    var queryString ="select distinct * from photos";
    db.query(queryString,function(err,results){
        if (err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(results);
        }
    })
      //db.release();
})

app.listen(3000,function(){
    console.log("listening at port 3000");
})
// create an express app
var express = require("express")
var logger = require('morgan');
var pug = require('pug');
var bodyParser = require('body-parser');
const fs = require('fs');
let posts = require('./posts.json');
var path = require('path');

var blogRouter = require('./routes/gerichte');

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));

// use the express-static middleware
app.use(express.static("public"))
app.use(logger('dev'));


app.use('/gerichte', blogRouter);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/add', function(req, res) {
    res.render('add');
});

app.post('/add', function(req, res) {

    fs.readFile('posts.json', function (err, data) {
        var json = JSON.parse(data);

        let max = 0;
        for(var i = 0; i < json.length; i++) {
            if(json[i].id >= max){
                max = json[i].id;
            }
        }

        req.body.id = max +1;
        json.push(req.body);   
        fs.writeFile("posts.json", JSON.stringify(json), function(err){
          if (err) throw err;
          //console.log('The "data to append" was appended to file!');
        });
        console.log(req.body)
      })
    
      res.render('success');

});

app.get('/about', function(req, res) {
    res.render('about');
});



app.get('/:KATEGORIE', function(req, res){
    res.render('kategorie', { kategorie: req.params.KATEGORIE, posts});
});


const port = process.env.PORT || 5000;
app.listen(port, 
	() => console.log(`Server is running ... ${port}`));
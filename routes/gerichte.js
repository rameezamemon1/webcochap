var express = require('express');
var router = express.Router();
const https = require('https');
const http = require('http');
let posts = require('../posts.json');

router.get('/:ID', function(req, res, next) {
    const gericht = posts.find(p => p.id === parseInt(req.params.ID));
    console.log(gericht)
    res.render('gericht', {gericht});
});


 

module.exports = router;
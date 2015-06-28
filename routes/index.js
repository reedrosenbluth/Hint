var express = require('express');
var nlp = require('nlp_compromise');
var WikiData = require('../lib/wikidata');
var info = require('../lib/info');
var router = express.Router();

router.get('/:search', function(req, res, next) {
  info.getWikiInfo(req.params.search.replace('+',' '))
    .then(function(data) {
      res.render('index', data);
    });
});

module.exports = router;

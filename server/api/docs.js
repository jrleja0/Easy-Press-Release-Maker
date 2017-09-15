const router = require('express').Router();
const Document = require('../db').model('document');
module.exports = router;

router.get('/', (req, res, next) => {
  Document.findAll({})
    .then(docs => res.json(docs))
    .catch(next);
});

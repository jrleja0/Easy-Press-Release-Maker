const router = require('express').Router();
const User = require('../db').model('user');
const Document = require('../db').model('document');
module.exports = router;

// fetch all user's docs
// router.get('/', (req, res, next) => {
//   // find user's id
//   Document.findAll({})
//     .then(docs => res.json(docs))
//     .catch(next);
// });

// fetch single doc
router.get('/:docId', (req, res, next) => {
  Document.findById(req.params.docId)
    .then(doc => res.json(doc))
    .catch(next);
});

// save changes to a doc or create a new doc
// router.post('/', (req, res, next) => {
//   if (req.body.id) {
//     // update Doc
//   } else {
//     // create new Doc and associate with user
//   }
// });

// delete a doc
router.delete('/:docId', (req, res, next) => {
  Document.findById(req.params.docId)
    .then(doc => doc.destroy())
    .then(() => res.status(204).send('Document deleted'))
    .catch(next);
});

const router = require('express').Router();
const Document = require('../db').model('document');
module.exports = router;

// fetch all user's docs
router.get('/', (req, res, next) => {
  Document.findAll({ where: { userId: req.user.id }})
    .then(docs => (res.json(docs)))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

// fetch single doc
router.get('/:docId', (req, res, next) => {
  Document.findById(req.params.docId)
    .then(doc => {
      return doc.userId === req.user.id ? res.json(doc) : res.json({/*ERROR*/});
    })
    .catch(next);
});

// save changes to a doc or create a new doc
router.post('/', (req, res, next) => {
  if (req.body.id) {
    // update an existing doc
    Document.findById(req.body.id)
      .then(doc => {
        return doc.update(req.body);
      })
      .then(doc => {
        return res.json(doc);
      })
      .catch(next);
  } else {
    // create new Doc and associate with user
    req.body.userId = req.user.id;
    Document.create(req.body)
      .then(doc => (res.json(doc)))
      .catch(err => {
        console.error(err);
        next(err);
      });
  }
});

// delete a doc
router.delete('/:docId', (req, res, next) => {
  Document.findById(req.params.docId)
    .then(doc => doc.destroy())
    .then(() => res.status(204).send('Document deleted'))
    .catch(next);
});

const router = require('express').Router();
const User = require('../db').model('user');
const Document = require('../db').model('document');
module.exports = router;

// fetch all user's docs
router.get('/', (req, res, next) => {
  Document.findAll({ where: { userId: req.user.id }})
    .then(docs => res.json(docs))
    .catch(next);
});

// fetch single doc
router.get('/:docId', (req, res, next) => {
  console.log('req.user', req.user);
  Document.findById(req.params.docId)
    .then(doc => {
      console.log('doc found', doc, doc.userId);
      // doc.userId === req.user.id ? res.json(doc) : /*ERROR*/;
      return res.json(doc);
    })
    .catch(next);
});

// save changes to a doc or create a new doc
router.post('/', (req, res, next) => {
  if (req.body.id) {
    // update an existing doc
    Document.findById(req.body.id)
      .then(doc => {
        console.log('!!!!!updating doc, req.body:', req.body);
        return doc.update(req.body);
      })
      .then(doc => {
        console.log('!!!!!updating doc(2), req.body:', req.body);
        return res.json(doc);
      })
      .catch(next);
  } else {
    // create new Doc and associate with user
    let createdDoc;
    console.log('!!!!!creating doc, req.body:', req.body);
    Document.create(req.body)
      .then(doc => {
        createdDoc = doc;
        return req.user.addDocument(doc);
      })
      .then(() => {
        console.log('!!!!!creating doc(2), req.body:', createdDoc);
        return res.json(createdDoc);
      })
      .catch(next);
  }
});

// delete a doc
router.delete('/:docId', (req, res, next) => {
  Document.findById(req.params.docId)
    .then(doc => doc.destroy())
    .then(() => res.status(204).send('Document deleted'))
    .catch(next);
});

const router = require('express').Router();
const {User} = require('../db/models/');
module.exports = router;

router.post('/login', (req, res, next) => {
  console.log('login', req.body);
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      console.log('login user', user);
      if (!user) {
        res.status(401).send('User not found');
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      } else {
        console.log('!!!!!!!!!here');
        req.login(user, err => err ? next(err) : res.json(user));
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  console.log('signup', req.body);
  User.create(req.body)
    .then(user => {
      req.login(user, err => err ? next(err) : res.json(user));
    })
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
    }});
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/me', (req, res) => {
  res.json(req.user);
});

router.use('/google', require('./google'));

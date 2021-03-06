const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const store = new SequelizeStore({db});
const PORT = process.env.PORT || 4444;
const app = express();
module.exports = app;

if (process.env.NODE_ENV === 'development') require('../secrets');

// passport registration
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  db.models.user.findById(id)
    .then(user => (done(null, user)))
    .catch(done));

const createApp = () => {
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.json({ limit: '1GB' }));
  app.use(bodyParser.urlencoded({ limit: '1GB', extended: true }));

  // session middleware with passport
  app.use(session({
    secret: process.env.SESSION_SECRET || 'no one will guess this secret',
    store,
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // auth and api routes
  app.use('/auth', require('./auth'));
  app.use('/api', require('./api'));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));
  // app.use('/bootstrap', express.static(path.join(__dirname, '..', 'node_modules/bootstrap/dist')));
  app.use('/jquery', express.static(path.join(__dirname, '..', 'node_modules/jquery/dist')));

  // 404 handling middleware
  app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // send index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Sorry, internal server error.');
  });

  // start listening (and create a 'server' object representing server)
  const server = app.listen(PORT, () => console.log(`Check it out on port ${PORT}`));
};

const syncDb = () => db.sync();

// This evaluates as true when this file is run directly from the command line.
// It will evaluate false when this module is required by another module, for example, if we wanted to require our app in a test spec.
if (require.main === module) {
  store.sync()
  .then(syncDb)
    .then(createApp);
} else {
  createApp(app);
}

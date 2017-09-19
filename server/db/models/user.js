const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  }
});

module.exports = User;

/*///
 InstanceMethods
*////
User.prototype.correctPassword = candidatePwd => {
  return User.encryptPassword(candidatePwd, this.salt) === this.password;
};

/*///
 ClassMethods
*////
User.generateSalt = () => {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = (plainText, salt) => {
  // return crypto.createHash('sha1').update(plainText).update(salt).digest('hex');
  const cryptoResult = crypto.createHash('sha1').update(plainText).update(salt).digest('hex');
  console.log('!!!!!!!!!!cryptoResult', cryptoResult);
  return cryptoResult;
};

/*///
 Hooks
*////
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt);
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

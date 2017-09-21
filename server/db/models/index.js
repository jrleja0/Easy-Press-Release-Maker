const db = require('../db');
const User = require('./user');
const Document = require('./document');

Document.belongsTo(User);
User.belongsToMany(Document, { through: 'user_documents' });

module.exports = {
  db,
	User,
	Document
};

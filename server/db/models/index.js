const User = require('./user');
const Document = require('./document');

User.belongsToMany(Document, { through: 'user_documents' });

module.exports = {
	User,
	Document
};

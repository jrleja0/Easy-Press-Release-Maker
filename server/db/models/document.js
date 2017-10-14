const Sequelize = require('sequelize');
const db = require('../db');

const Document = db.define('document',
  {
    crop: {
      type: Sequelize.BOOLEAN
    },
    // imgBlob: {
    //   type: Sequelize.BLOB,
    // },
    imgSrc: {
      type: Sequelize.TEXT
    },
    Title: {
      type: Sequelize.STRING
    },
    Date: {
      type: Sequelize.STRING
    },
    Location: {
      type: Sequelize.STRING
    },
    'Main Text': {
      type: Sequelize.TEXT
    },
    'Secondary Text': {
      type: Sequelize.TEXT
    },
    'Text About Company': {
      type: Sequelize.TEXT
    },
    'Image Credits': {
      type: Sequelize.STRING
    }
  },
  {
    getterMethods: {
      mainTextSnippet: function() {
        return this['Main Text'] ?
          this['Main Text'].slice(0, 300) + '...'
          : null;
      },
      showPreview: function() {
        return true;
      }
    }
  }
);

module.exports = Document;

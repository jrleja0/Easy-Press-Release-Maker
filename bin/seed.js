const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  image: [
    {
      name: 'image1',
      imagePath: 'assets/image1.jpg',
      description: 'This is image1.',
    },
    {
      name: 'image2',
      imagePath: 'assets/image2.jpg',
      description: 'This is image2.',
    }
  ]
};

db.sync({force: true})
  .then(() => {
    console.log('Dropped old data, now inserting seed data.');
    return Promise.map(Object.keys(data), modelName => {
      return Promise.map(data[modelName], modelInstance => {
        return db.model(modelName).create(modelInstance);
      });
    });
  })
  .then(() => {
    console.log('Finished inserting seed data.');
  })
  .catch(console.error.bind(console))
  .finally(() => {
    db.close();
    return null;
  });

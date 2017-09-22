const db = require('../server/db');
const Promise = require('bluebird');

const data = {
  document: [
    {
      crop: true,
      imgSrc: 'string',
      Title: 'My First Saved Press Release',
      Date: '9/1/2017',
      Location: 'New York City',
      'Main Text': 'Vestibulum interdum nec lorem aliquam cursus. Aenean egestas nunc felis, eu facilisis enim placerat id. Integer sit amet nunc pellentesque, vulputate massa a, euismod purus. In dictum odio vel tortor bibendum venenatis. Pellentesque sagittis odio dui, ac rutrum lorem ullamcorper et. Praesent tempor lacus et mattis faucibus. Donec nisi mi, ornare vitae hendrerit at, sagittis et mauris. Phasellus vestibulum efficitur pretium. Nulla elementum sit amet est sit amet vulputate. Phasellus auctor nisi ligula, et accumsan ex ultricies et. Aenean pretium orci mauris.',
      'Text About Company': 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae ullamcorper ante. Donec nec lectus vel quam consequat efficitur vel at lorem. In sed nisi eget sapien euismod faucibus. Maecenas fermentum pellentesque enim. Proin rutrum metus fringilla, lacinia nisi at, lobortis eros. Vestibulum convallis felis sed quam mattis bibendum. Suspendisse venenatis ornare ante sit amet pulvinar. Sed ac orci magna. Maecenas imperdiet enim odio, et ultricies augue ornare et. Praesent posuere bibendum tortor, vitae pretium risus eleifend vel. Etiam nulla lacus, venenatis sit amet tempus vitae, cursus quis risus. Proin sit amet nisi dapibus, pellentesque lectus vel, blandit erat. Quisque id lorem rutrum, dignissim enim nec, semper dolor.'
    },
    {
      crop: false,
      imgSrc: 'string',
      Title: 'My Second Saved Press Release',
      Date: '9/2/2017',
      Location: 'New York City',
      'Main Text': 'In fermentum lorem placerat dolor hendrerit ornare. Nunc faucibus dui non metus porta, ac vehicula turpis rhoncus. Donec erat tortor, dictum rutrum mattis in, dapibus ut dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vel est sit amet diam aliquam consequat quis et mauris. Curabitur at dui mattis, cursus orci eget, vestibulum enim. Vivamus rutrum nisi efficitur massa efficitur pellentesque. Donec euismod turpis diam, vitae rutrum risus placerat at. Nullam commodo accumsan ante, eu commodo est scelerisque eget. Nullam interdum vulputate purus nec gravida. Fusce aliquet facilisis eros vel ullamcorper. Quisque aliquet aliquam velit, eu pharetra lectus finibus vitae.',
      'Secondary Text': 'Praesent sed nisi velit. Ut consequat turpis eget purus pulvinar, nec tristique ipsum tincidunt. Morbi enim risus, luctus vel pharetra non, lobortis ac mi. Maecenas sed libero ac eros tincidunt posuere condimentum id tortor. Donec ut augue sit amet arcu aliquam mattis aliquet at urna. Pellentesque id justo vitae dolor luctus bibendum. Donec euismod leo enim, ac scelerisque ipsum fringilla in. Sed vitae dui ultrices, consectetur nunc id, blandit eros. Phasellus pulvinar porta finibus. Suspendisse consequat egestas consectetur.'
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

const db = require('../server/db');
const Promise = require('bluebird');

const mainText = 'Vestibulum interdum nec lorem aliquam cursus. Aenean egestas nunc felis, eu facilisis enim placerat id. Integer sit amet nunc pellentesque, vulputate massa a, euismod purus. In dictum odio vel tortor bibendum venenatis. Pellentesque sagittis odio dui, ac rutrum lorem ullamcorper et. Praesent tempor lacus et mattis faucibus. Donec nisi mi, ornare vitae hendrerit at, sagittis et mauris. Phasellus vestibulum efficitur pretium. Nulla elementum sit amet est sit amet vulputate. Phasellus auctor nisi ligula, et accumsan ex ultricies et. Aenean pretium orci mauris.';

const secondaryText = 'Maecenas imperdiet enim odio, et ultricies augue ornare et. Praesent posuere bibendum tortor, vitae pretium risus eleifend vel. Etiam nulla lacus, venenatis sit amet tempus vitae, cursus quis risus. Proin sit amet nisi dapibus, pellentesque lectus vel, blandit erat. Quisque id lorem rutrum, dignissim enim nec, semper dolor.';

const textAboutCompany = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae ullamcorper ante. Donec nec lectus vel quam consequat efficitur vel at lorem. In sed nisi eget sapien euismod faucibus. Maecenas fermentum pellentesque enim. Proin rutrum metus fringilla, lacinia nisi at, lobortis eros. Vestibulum convallis felis sed quam mattis bibendum. Suspendisse venenatis ornare ante sit amet pulvinar. Sed ac orci magna.';

const data = {
  user: [
    {
      email: 'test@test.com',
      password: 'test1'
    },
    {
      email: 'test2@test.com',
      password: 'test2'
    }
  ],
  document: [
    {
      crop: true,
      Title: 'My 1st Press Release',
      Date: '9/1/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 1
    },
    {
      crop: false,
      Title: 'My 2nd Press Release',
      Date: '9/2/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 1
    },
    {
      crop: true,
      Title: 'My 3rd Press Release',
      Date: '9/3/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 1
    },
    {
      crop: false,
      Title: 'My 4th Press Release',
      Date: '9/4/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 1
    },
    {
      crop: true,
      Title: 'My 1st Press Release',
      Date: '9/1/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 2
    },
    {
      crop: false,
      Title: 'My 2nd Press Release',
      Date: '9/2/2017',
      Location: 'New York City',
      'Main Text': mainText,
      'Secondary Text': secondaryText,
      'Text About Company': textAboutCompany,
      'Image Credits': 'Photo by John Smith',
      userId: 2
    }
  ]
};

db.sync({force: true})
  .then(() => {
    console.log('Dropped old data, now inserting seed data.');
    return Promise.map(data.user, userInstance => {
      return db.model('user').create(userInstance);
    });
  })
  .then(() => {
    return Promise.map(data.document, docInstance => {
      return db.model('document').create(docInstance);
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

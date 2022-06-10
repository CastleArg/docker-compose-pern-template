db = db.getSiblingDB('messages');

db.createCollection('messages');

db.messages.insertMany([
 {
    message: 'Don\'t Panic@',
  },
  {
    message: 'It works on your machine'
  },
  {
    message: 'DB is mongo'
  }  
]);
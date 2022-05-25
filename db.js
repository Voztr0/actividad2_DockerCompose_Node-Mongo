const mongoose = require('mongoose');

mongoose
  .connect('mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado!'))
  .catch((err) => console.log(err));

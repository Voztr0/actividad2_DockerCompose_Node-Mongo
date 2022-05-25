const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Conexión a MongoDB
mongoose
  .connect('mongodb://mongo:27017/docker-node-mongo', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Conectado!'))
  .catch((err) => console.log(err));

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model('item', ItemSchema);

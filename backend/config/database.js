const mongoose = require('mongoose');

async function connectDB() {

  const user = process.env.MONGO_DB_USER
  const password = process.env.MONGO_DB_PASSWORD;
  const name = process.env.MONGO_DB_NAME;
  
  try {
    await mongoose.connect(`mongodb+srv://${user}:${password}@${name}.t2lf8mk.mongodb.net/?retryWrites=true&w=majority`);

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

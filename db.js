const mongoose = require('mongoose');

function dbConnection() {
    // Connect to MongoDB-Compase -- then open your terminal and run mongod command.
    mongoose.connect(process.env.DB_CONNECTION_URI
    ).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Could not connect to MongoDB:', err));
}
module.exports = dbConnection;
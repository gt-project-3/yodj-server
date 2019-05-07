const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin_1:<password>@yodj-ldngv.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = client
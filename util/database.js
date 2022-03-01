const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://id:pass@cluster0.ntvwd.mongodb.net/shops?retryWrites=true&w=majority';

const client = new MongoClient(URI);

let _db = null;

async function createConnection(cb = null) {
    try {
        const mongoClient = await client.connect();
        _db = mongoClient;
        if(cb) cb();
    } catch(err) {
        console.log('Some Error Occurred');
    }
}

async function getDb() {
    if(_db == null) {
       _db =  await createConnection();
    }

    return _db;
}


exports.createConnection = createConnection;
exports.getDb = getDb;

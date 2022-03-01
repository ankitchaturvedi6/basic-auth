const express = require('express')
const app = express();
const PORT = 3000;

const path = require('path');
// parse
const bodyParser = require('body-parser');
// express session
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const cookieParser = require('cookie-parser');

// initalize middle ware 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// set the template engine
app.set('view engine', 'ejs');


// session store
const store = new mongoDbStore({
    uri:'mongodb+srv://root:afkORqKcpzaoAfUV@cluster0.ntvwd.mongodb.net/shops',
    collection: 'sessions'
})
app.use(cookieParser());
app.use(session({
    secret: 'thisismysecretkey',
    store: store,
    resave: false,
    saveUninitialized: true
}
));

const database = require('./util/database');
// get routes
const authRouter = require('./routes/auth');

app.use('/auth', authRouter);

async function startServer() {
    try {
        await database.createConnection();
    } catch(err) {
        console.log(err);
    }
}
app.listen(PORT, () => {
    startServer();
    console.log(`listing at port: ` + PORT);
})






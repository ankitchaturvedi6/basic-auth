const path = require('path');
const rootDir = path.dirname(require.main.filename || process.mainModule.filename);
const db = require(path.join(rootDir, 'util/database'));

exports.getLogin = (req, res) => {
    res.render('auth/login');
}


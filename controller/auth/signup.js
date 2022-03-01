const path = require('path');
const rootDir = path.dirname(require.main.filename || process.mainModule.filename);
const db = require(path.join(rootDir, 'util/database'));

const User = require(path.join(rootDir, 'model/user'));

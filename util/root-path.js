const path = require('path');

exports.getRootPath = () => {
    return path.dirname(require.main.filename || process.mainModule.filename);
}
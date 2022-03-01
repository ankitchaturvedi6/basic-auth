class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this._id = null;
    }
}

module.exports = User;
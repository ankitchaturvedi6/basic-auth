exports.authenticate = (req, res, next) => {
    const session = req.session;
    // user is authorized 
    // call next middleware
    if(session.userid) {
        next();
    }
    /**
     * user is not authorized
     * redirect to login page if not on login page
     */
    if(req.route.path != '/auth/login') {
        res.render('auth/login');
    }
}

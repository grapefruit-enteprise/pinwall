module.exports = function(db) {

    return {
        requireAuthentication: function(req, res, next){
            var token = req.get('Auth');
        }
    };
};

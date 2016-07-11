var bcrypt    = require('bcrypt');
var db = require('../db.js');



exports.usersFetched = function(req, res, orgId){

    db.Organization.findById(orgId)
        .then(function(organization){
            organization.getUsers()
            .then(function(users){
                console.log("All notes ", JSON.stringify(users, null ,4));
                res.status(200).send(users);
            })
            .catch(function (err) {
                console.error("line 13: Note  Model", err.message);
                res.status(500).send(err.message);

            });
    });
}



exports.userCreate = function(req, res, newUser) {
    console.log("line 25: creat user", newUser);
    db.User.create(newUser)
        .then(function(user){
            console.log("line 7: User has been Created");
            var token = user.generateToken('authentication');
            console.log("res.header Value :::", res.header)
            if(token){
                res.status(200)
                    .header('Auth', token)
                    .header('currentUser', user.id)
                    .send(user.toPublicJSON())
            }
            else
            {
                res.status(401).send();
            }

        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);
        });
};

exports.userUpdate = function(req, res, updatedUser, paramId){

    console.log("line 37: User", paramId);
    db.User.update(updatedUser, { where: { id: paramId }})
        .then(function (result) {
        // result is the number of records affected
            console.log("line 41: User model", result);
            res.status(200).send(result + " Users have been updated in the database");

        })
        .catch(function (err) {
            console.error("line 46: User  Model",err.message);
            res.status(500).send(err.message);

        });
};


exports.userDelete = function(req, res, userId){
        console.log(userId);
        db.User.findById(userId)
        .then(function(user){
            user.destroy();
            console.log("'" + user.username + "'" + " was removed from the database");
            res.status(200).send("'" + user.username +  "'" + " was removed from the database");

        })
        .catch(function (err) {
            console.error("line 66: User Model", err.message);
            res.status(500).send(err.message);

        });
};



exports.userLogin = function(req, res, loginUser){

    db.User.findOne({
        where: {
            email: loginUser.email
        }})
        .then(function(user){
        console.log(user)
            if(!user || !bcrypt.compareSync(loginUser.password,     user.get('passwordHash'))){
                return res.status(401).send();
            }

            var token = user.generateToken('authentication');
        console.log("res.header Value :::", res.header)
        if(token){
            res.status(200)
                .header('Auth', token)
                .header('currentUser', user.id)
                .send(user.toPublicJSON())
        }
        else
        {
            res.status(401).send();
        }

        })
        .catch(function(err){
            res.status(500).send(err.message);
        })


}









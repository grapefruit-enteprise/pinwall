var db             = require('../db.js');
var _              = require('lodash');
var models         = require('../models/appModel');
var Users          = require('../models/user');
var Notes          = require('../models/note');
var Categories     = require('../models/category');
var Organizations  = require('../models/organization');
var Tags           = require('../models/tag');
var helper         = require('../helperFN/helpers.js');

console.log("line 4: appController")

module.exports = {
//////////////////////////////////////////////////////////////////
/////////////////       Organizations      //////////////////////
/////////////////////////////////////////////////////////////////

    'organizations': {
        get: function(req, res){
            Organizations.organizationsFetched(req, res)
        },
        post: function(req, res){
            var newOrg  = _.pick(req.body, 'name', 'address', 'city', 'state', 'phone', 'decription', 'img')
            Organizations.organizationCreate(req, res, newOrg)
        },
        put: function(req, res){},
        delete: function(req, res){}
    },
    'organizations/:orgId': {
        get: function(req, res){},
        put: function(req, res){
            var updatedOrg = _.pick(req.body, 'name', 'address', 'city', 'state', 'phone', 'decription', 'img')
            var orgId = req.params.orgId
            Organizations.organizationUpdate(req, res, updatedOrg, orgId)
        },
        post: function(req, res){},
        delete: function(req, res){
        Organizations.organizationDelete (req, res);
        }
    },
//////////////////////////////////////////////////////////////////
/////////////////         Users             //////////////////////
//////////////////////////////////////////////////////////////////

    'user/:userId/organizations': {
        get: function(req, res){
            var userId = req.params.userId;
            Users.userOrganizationFetched(req, res, userId);
        },
        post: function(req, res){},
        put: function(req, res){},
        delete: function(req, res){}
    },



    'organizations/:orgId/users': {
        get: function(req, res){
            var orgId = req.params.orgId
            Users.usersFetched(req ,res, orgId)
        },
        post: function(req, res){
            var newUser = _.pick(req.body, 'username', 'firstname',
                            'lastname', 'email', 'password');
            newUser.organizationId = req.params.orgId
            Users.userCreate(req, res, newUser)
        },

        put: function(req, res){},
        delete: function(req, res){}
    },
    'organizations/:orgId/users/:userId': {
        get: function(req, res){},
        post: function(req, res){},
        put: function(req, res){
            var updatedUser = _.pick(req.body, 'username', 'firstname',
                            'lastname', 'email', 'password');
            updatedUser.organizationId = req.params.orgId
            var paramId = req.params.userId;
            Users.userUpdate(req, res, updatedUser, paramId)

    },
        delete: function(req, res){
            console.log("line 103 : appController delete userID")

            console.log("req.params", req.params.id)
            var userId = req.params.id
            Users.userDelete(req, res, userId);
        }
    },


//////////////////////////////////////////////////////////////////
/////////////////         LOGIN/ LOGOUT     //////////////////////
//////////////////////////////////////////////////////////////////

    'users/login': {
        get: function(req, res){
//            var orgId = req.params.orgId
//            Users.usersFetched(req ,res, orgId)
        },
        post: function(req, res){
            var loginUser = _.pick(req.body, 'email', 'password');
            console.log('req.body', req.body);
            console.log('loginUser', loginUser);
            if(typeof loginUser.email !== 'string' || typeof loginUser.password  !== 'string') {
                return res.status(500).send();
            }
            Users.userLogin(req, res, loginUser);

        },

        put: function(req, res){},
        delete: function(req, res){}
    },
    'users/signup': {
        get: function(req, res){},
        post: function(req, res){
            var newUser = _.pick(req.body, 'username', 'firstname',
                            'lastname', 'email', 'password', 'organizationId');
            Users.userCreate(req, res, newUser)


        },
        put: function(req, res){},
        delete: function(req, res){
            console.log("line 103 : appController delete userID")

            console.log("req.params", req.params.id)
            var userId = req.params.id
            Users.userDelete(req, res, userId);
        }
    },

//////////////////////////////////////////////////////////////////
/////////////////              Notes        //////////////////////
//////////////////////////////////////////////////////////////////

    'organizations/:orgId/notes': {
        get: function(req, res){
            var orgId = req.params.orgId
            Notes.notesFetched(req ,res, orgId)
        },

        post: function(req, res){},
        put: function(req, res){},
        delete: function(req, res){}
    },
    'organizations/:orgId/notes/:id': {
        get: function(req, res){},
        post: function(req, res){},
        put: function(req, res){
            var updatedNote = {
                title   : req.body.title,
                img     : req.body.img,
                content : req.body.content,
            };
            let tags = [];
            if (req.body.tags) tags = req.body.tags.toLowerCase().split(" ");
            console.log("PUTS req.body", req.body)
            console.log("PUTS req.params", req.params)
            var noteId = req.params.id;
            Notes.noteUpdate(req, res, updatedNote, noteId, tags)

    },
        delete: function(req, res){
            console.log("line 59 : appController delete noteID")

            console.log("req.params", req.body.id)
            var noteId = req.param.id
            Notes.noteDelete(req, res, noteId);
        }
    },

//////////////////////////////////////////////////////////////////
/////////////////       Notes by User       //////////////////////
//////////////////////////////////////////////////////////////////

    'organizations/:orgId/users/:userId/notes': {
        get: function(req, res){
            var orgId = req.params.orgId
            var userId = req.params.userId
            Notes.notesFetchedbyUser(req ,res, orgId, userId)
        },

        post: function(req, res){
            console.log("line 168 ::: ", req.params)
            var newNote = {
                title           : req.body.title,
                img             : req.body.img,
                content         : req.body.content,
                organizationId  : req.params.orgId,
                userId          : req.params.userId
            }
         // req.body.categories is an [] of category IDs
            var categories = req.body.categories;
            var tags = req.body.tags.toLowerCase().split(" ");

        Notes.noteCreate(req, res, newNote, categories, tags)
        },
        put: function(req, res){},
        delete: function(req, res){}
    },
    'organizations/:orgId/users/:userId/notes/:id': {
        get: function(req, res){},
        post: function(req, res){},
        put: function(req, res){
            var updatedNote = {
                title           : req.body.title,
                img             : req.body.img,
                content         : req.body.content,
                organizationId  : req.params.orgId,
                userId          : req.params.userId
            };
            let tags = [];
            if (req.body.tags) tags = req.body.tags.toLowerCase().split(" ");
            var categories = req.body.categories;

            console.log("PUTS req.body", req.body)
            console.log("PUTS req.params", req.params)
            var noteId = req.params.id;
            Notes.noteUpdate(req, res, updatedNote, noteId, categories, tags)

    },
        delete: function(req, res){
            console.log("line 59 : appController delete noteID")

            console.log("req.params", req.params.id)
            var noteId = req.param.id;
            var userId = req.param.id;
            var orgId = req.param.id;
            Notes.noteDeleteByUser(req, res, noteId, orgId , userId);
        }
    },



//////////////////////////////////////////////////////////////////
/////////////////        Categories         //////////////////////
/////////////////////////////////////////////////////////////////

    'organizations/:orgId/categories': {
        get:function(req, res){
            var orgId = req.params.orgId
            Categories.categoriesFetched(req, res, orgId)
        },
        put:function(req, res){},
        delete:function(req, res){},
        post: function(req, res){
            var newCat = {
                title           : req.body.title,
                description     : req.body.description,
                organizationId  : req.params.orgId

            }
            Categories.categoryCreate(req, res, newCat);
        }
    },

    'organizations/:orgId/categories/:id': {
        get:function(req, res){
            var catId = req.params.id;
            Notes.notesFetchedbyCat(req, res, catId)

        },
        put:function(req, res){
            var updatedCat = {
                title           : req.body.title,
                description     : req.body.description,
            };

            var catId = req.params.id;

            Categories.categoryUpdate(req, res, updatedCat, catId)
        },
        delete:function(req, res){
            Categories.categoryDelete(req, res);
        },
        post: function(req, res){}
        },

//////////////////////////////////////////////////////////////////
/////////////////            Tags           //////////////////////
/////////////////////////////////////////////////////////////////
    'organizations/:orgId/tags': {
        get:function(req, res){
            var tagId = req.params.id;
            Tags.tagsFetched(req, res)

        },
        post:function(req, res){
            var newTag = {
                name  : req.body.name
            };

            Tags.tagCreate(req, res, newTag)
        },
        delete:function(req, res){},
        put: function(req, res){}
    },

   'organizations/:orgId/tags/:id': {
        get:function(req, res){},
        put:function(req, res){
            var updatedTag = {
                name  : req.body.name
            };

            var tagId = req.params.id;

            Tags.tagUpdate(req, res, updatedTag, tagId)
        },
        delete:function(req, res){
            Tags.tagDelete(req, res);

        },
        post:function(req, res){}
    }

}

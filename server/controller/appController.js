var models         = require('../models/appModel');
var Notes          = require('../models/note');
var Categories     = require('../models/category');
var Organizations  = require('../models/organization');
var Tags           = require('../models/tag');
var helper         = require('../helperFN/helpers.js');
console.log("line 4: appController")

module.exports = {

    'organizations': {
        get: function(req, res){
            Organizations.organizationsFetched(req, res)
        },
        post: function(req, res){
            var newOrg = {
                name       : req.body.name,
                address    : req.body.address,
                city       : req.body.city,
                state      : req.body.state,
                phone      : req.body.phone,
                description: req.body.description,
                img        : req.body.img
            }
         // req.body.categories is an [] of category IDs
            Organizations.organizationCreate(req, res, newOrg)
        },
        put: function(req, res){},
        delete: function(req, res){}
    },
    'organizations/:orgId': {
        get: function(req, res){},
        put: function(req, res){
            var updatedOrg = {
                name       : req.body.name,
                address    : req.body.address,
                city       : req.body.city,
                state      : req.body.state,
                phone      : req.body.phone,
                description: req.body.description,
                img        : req.body.img
            }

            var orgId = req.params.orgId
        Organizations.organizationUpdate(req, res, updatedOrg, orgId)
        },
        post: function(req, res){},
        delete: function(req, res){
        Organizations.organizationDelete (req, res);
        }
    },

    'organizations/:orgId/notes': {
        get: function(req, res){
            var orgId = req.params.orgId
            Notes.notesFetched(req ,res, orgId)
        },

        post: function(req, res){
            var newNote = {
                title           : req.body.title,
                img             : req.body.img,
                content         : req.body.content,
                organizationId  : req.params.orgId
            }
         // req.body.categories is an [] of category IDs
            var categories = req.body.categories;
            var tags = req.body.tags.toLowerCase().split(" ");

        Notes.noteCreate(req, res, newNote, categories, tags)
        },
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
            var tags = req.body.tags.toLowerCase().split(" ");
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





















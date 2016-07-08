var models = require('../models/appModel')
var Notes  = require('../models/note')
var Categories  = require('../models/category')
var helper = require('../helperFN/helpers.js')
console.log("line 4: appController")

module.exports = {
  'notes': {
    get: function(req, res){
        Notes.notesFetched(req,res)
    },

    post: function(req, res){
     var newNote = {title: req.body.title,
                    img: req.body.img,
                    content: req.body.content
                   }
     // req.body.categories is an [] of category IDs
     var categories = req.body.categories;

    Notes.noteCreate(req, res, newNote, categories)

    },
    put: function(req, res){

    },
    delete: function(req, res){

    }
  },
  'notes/:id': {
    get: function(req, res){},
    post: function(req, res){},
    put: function(req, res){

        console.log("PUTS req.body", req.body)
        console.log("PUTS req.params", req.params)
        var noteId = req.params.id;
        Notes.noteUpdate(req, res , noteId)

    },
    delete: function(req, res){
        console.log("line 59 : appController delete noteID")

        console.log("req.params", req.body.id)
        var noteId = req.param.id
        Notes.noteDelete(req ,res , noteId);
    }

  },
  'categories': {
    get:function(req, res){},
    put:function(req, res){},
    delete:function(req, res){},
    post: function(req, res){
     var newCat = {title: req.body.title,
                    description: req.body.description,
                   }
    Categories.categoryCreate(req, res, newCat)
    }

  },
  'categories/:id': {
    get:function(req, res){
        var catId = req.params.id;
        Notes.notesFetchedbyCat(req,res, catId)

    },
    put:function(req, res){
        var catId = req.params.id;
        Categories.categoryUpdate(req, res, catId)
    },
    delete:function(req, res){
        Categories.categoryDelete(req ,res);

    },
    post: function(req, res){}
  }

}





















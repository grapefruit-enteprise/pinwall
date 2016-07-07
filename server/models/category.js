var db = require('../db.js');

exports.categoryCreate = function(req, res, newCat){
    console.log("line 4: category",newCat);
    db.Category.create(newCat)
        .then(function(category){
            res.send(category);
        })
        .catch(function(err){
            console.error(err.message);
    })
};

//exports.categoryUpdate = function(req, res, paramId){
//    var updatedNote = {
//        title: req.body.title,
//        img: req.body.img,
//        content: req.body.content
//    }
//
//    console.log("line 22: note", paramId);
//    db.Note.update(updatedNote,{ where: { id: paramId }})
//        .then(function (result) {
//            console.log("line 25: Notes model", result)
//        })
//        .catch(function (err) {
//            console.error("line 28: Notes Model",err.message);
//        })
//}

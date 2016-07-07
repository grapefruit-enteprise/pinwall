var db = require('../db.js');



exports.noteCreate = function(req, res, newNote, category){
    console.log("line 6: note",newNote);
    db.Note.create(newNote)
        .then(function(note){
        console.log("line 9: notes model", note);
//        console.log("line 10: category", category)
        if(category){
           note.setCategories(category.id, note.id);
           note.setCategories(2, note.id);
        }
        else
        {
           note.setCategories(2, note.id);
        }

        })
        .catch(function(err){
        console.error(err.message);
    })
}

exports.noteUpdate = function(req, res, paramId){
    var updatedNote = {
        title: req.body.title,
        img: req.body.img,
        content: req.body.content
    }

    console.log("line 22: note", paramId);
    db.Note.update(updatedNote,{ where: { id: paramId }})
        .then(function (result) {
            console.log("line 25: Notes model", result)
        })
        .catch(function (err) {
            console.error("line 28: Notes Model",err.message);
        })
}















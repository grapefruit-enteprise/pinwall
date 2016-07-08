var db = require('../db.js');

exports.notesFetched = function(req, res, orgId){

    db.Organization.findById(orgId)
        .then(function(organization){
            organization.getNotes()
            .then(function(notes){
                console.log("All notes ", JSON.stringify(notes, null ,4));
                res.status(200).send(notes);
            })
            .catch(function (err) {
                console.error("line 10: Note  Model",err.message);
                res.status(500).send(err.message);

            });
    });
}

exports.notesFetchedbyCat = function(req, res, catId){
    db.Category.findById(catId)
        .then(function(category){
//            console.log("line 8: fetch Note", category);
            category.getNotes()
                .then(function(notes){
                    console.log("All notes with that catId", JSON.stringify(notes, null ,4))
                    res.status(200).send(notes);
            })
            .catch(function(err){
                console.error(err.message);
                res.status(500).send(err.message);

            });
        })
}

exports.noteCreate = function(req, res, newNote, categories) {
    console.log("line 19: note",newNote);
    db.Note.create(newNote)
        .then(function(note){
        console.log("line 22: Note has been Created");
           note.setCategories(categories, note.id)
               .then(function(note){
                    console.log("NotesCategories has been update !!");
                    res.status(200).send(note)
                });
        })
        .catch(function(err){
            console.error(err.message);

        });
};

exports.noteUpdate = function(req, res, updatedNote, noteId){

    var categories = req.body.categories;

    console.log("line 41: note", noteId);
    console.log("line 42: categories", categories);
    db.Note.update(updatedNote,{ where: { id: noteId }, returning:true})
        .then(function (result) {
            console.log("line 45: Notes model", JSON.stringify(result));
            console.log("line 46: arguments", result[1]);
            var note = result[1][0];
            note.setCategories(categories, noteId)
                .then(function(){
                    console.log("Categories in Note "+ noteId + " are updated !!" )
                    res.status(200).send("Note has been updated");

            })
        })
        .catch(function (err) {
            console.error("line 73: Notes Model", err.message);
            res.status(500).send(err.message)

        });
};

exports.noteDelete = function(req, res, noteId){
        var noteId = req.params.id
        console.log(noteId);
        db.Note.findById(noteId)
        .then(function(note){
            note.destroy();
            console.log("'" + note.title + "'" + " was removed from the database");
            res.status(200).send( "'" + note.title + "'" + " was removed from the database");

        })
        .catch(function (err) {
            console.error("line 89: Notes Model",err.message);
            res.status(500).send(err.message)

        });
}













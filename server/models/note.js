var db    = require('../db.js');
var async = require('async');

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

exports.notesFetchedbyUser = function(req ,res, orgId, userId){
    db.Note.findAll({
        where: {
            userId          : userId,
            organizationId  : orgId
        }
    })
    .then(function(notes){
        console.log("All notes with that catId", JSON.stringify(notes, null ,4))
        res.status(200).send(notes);
    })
    .catch(function(err){
        console.error(err.message);
        res.status(500).send(err.message);
    })

}


exports.noteCreate = function(req, res, newNote, categories, tags) {
//    console.log("line 19: note",newNote);
    db.Note.create(newNote)
        .then(function(note){
        var noteRecord = note;
        var tagArr     = [];
           note.setCategories(categories, note.id)
               .then(function(NotesCategories){
                console.log("NotesCategories has been update !!: ", tags);
//                console.log("the array of tags",tags);
                    async.eachSeries(tags, function(tag, callback) {
                        db.Tag.findOrCreate({
                            where: {
                                name: tag
                            }
                        })
                        .then(function(result) {
                            tagArr.push(result[0].dataValues.id);
                            callback()
                        })
                        .then(function(){
                            noteRecord.setTags(tagArr, noteRecord.id)
                        })
                    })

                }) // note

        })
        .then(function(){
            res.status(200).send("Note has been Created");
        })
        .catch(function(err){
            console.error(err.message);

        });
};

exports.noteUpdate = function(req, res, updatedNote, noteId, categories, tags){

    var categories = req.body.categories;

    console.log("line 41: note", noteId);
    console.log("line 42: categories", categories);
    db.Note.update(updatedNote,{ where: { id: noteId }, returning:true})
        .then(function (result) {
            console.log("line 45: Notes model", JSON.stringify(result));
            console.log("line 46: arguments", result[1]);
            var note = result[1][0];
            var tagArr = [];
            note.setCategories(categories, note.id)
                .then(function(){
                console.log("NotesCategories has been update !!: ", tags);
//                console.log("the array of tags",tags);
                    async.eachSeries(tags, function(tag, callback) {
                        db.Tag.findOrCreate({
                            where: {
                                name: tag
                            }
                        })
                        .then(function(result) {
                            tagArr.push(result[0].dataValues.id);
                            callback()
                        })
                        .then(function(){
                            note.setTags(tagArr, note.id)
                        })
                    })

                })
        })
        .then(function(data){
        console.log(data)
//            console.log("Categories in Note "+ noteId + " are updated !!" )
            res.status(200).send("Note has been updated");

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


exports.noteDeleteByUser = function(req, res, noteId, orgId , userId){
        var noteId = req.params.id
        console.log(noteId);
        db.Note.findById(noteId, {where:{
            userId          : userId,
            organizationId  : orgId
        }})
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












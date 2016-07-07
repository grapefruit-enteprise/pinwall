var db = require('../db.js');



exports.noteCreate = function(req, res, newNote, categories) {
    console.log("line 6: note",newNote);
    db.Note.create(newNote)
        .then(function(note){
        console.log("line 9: Note has been Created");
           note.setCategories(categories, note.id)
               .then(function(note){
                    console.log("Note joined to Categories");
                });
        })
        .catch(function(err){
            console.error(err.message);
    });
};

exports.noteUpdate = function(req, res, noteId){
    var updatedNote = {
        title: req.body.title,
        img: req.body.img,
        content: req.body.content,
    };
    var categories = req.body.categories;

    console.log("line 28: note", noteId);
    console.log("line 29: categories", categories);
    db.Note.update(updatedNote,{ where: { id: noteId }, returning:true})
        .then(function (result,arr) {
            console.log("line 31: Notes model", JSON.stringify(result), "Arr", arr);
            console.log("line 33: arguments", result[1]);
            var note = result[1][0];
            note.setCategories(categories, noteId)
        })
        .catch(function (err) {
            console.error("line 34: Notes Model",err.message);
        });
};

//
//models.Product.find({ where: {id: 1} }).on('success', function(product) {
// models.Category.findAll({where: {id: [1,2,3]}}).on('success', function(category){
//   product.setCategories(category);
// });
//});












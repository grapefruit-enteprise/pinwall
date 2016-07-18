var db = require('../db.js');
var Note = require("../models/note.js");

exports.create =  function(newNote){
   Note.create(newNote, function(err, newlyCreated){
    if(err){
        console.log(err);
    }else {
        console.log("has been created:" , newlyCreated);
    }
  })
}


exports.fetchNotes = function(req, res){
    return new Q (Note.find({}, function(err, data){
        if(err){
          console.log(err);
        }else {
            console.log(data)
            res.send(data);
        }
    })
    )
}


exports.UpdateNote = function(req, res){
    var updatedNote = {
        title: req.body.title,
        date: req.body.date,
        img: req.body.img,
        content: req.body.content
    }
    console.log("inside helper update", req.params)
    Note.update({_id: req.body._id}, updatedNote ,function(err){
        if(err){
          console.log(err);
        } else {
         res.send("Successfully updated");
        }
    }
   );
}

exports.deleteNote = function(req, res){
    Note.remove({_id: req.params.id}, function(err){
        if(err){
            console.log(err);
        }else {
            console.log("has been DELETED:" );
            res.send("Success Deleted");
        }
    })

}








































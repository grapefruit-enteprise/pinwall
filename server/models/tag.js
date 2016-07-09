var db = require('../db.js');

exports.tagsFetched = function(req, res){

    db.Tag.findAll()
        .then(function(tags){
            console.log("All tags ", JSON.stringify(tags, null ,4));
            res.status(200).send(tags);
        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);
        });
};


exports.tagCreate = function(req, res, newTag){
    db.Tag.create(newTag)
        .then(function(tag){
            res.status(200).send(tag);
        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);

    });
};

exports.tagUpdate = function(req, res, updatedTag, tagId){

    db.Tag.update(updatedTag, { where: { id: tagId }})
        .then(function (result) {
            res.status(200).send(result + " Tags have been updated in the database");
        })
        .catch(function (err) {
            console.error("line 25: Tag  Model",err.message);
            res.status(500).send(err.message);
        });
};

exports.tagDelete = function(req, res){
        var tagId = req.params.id;
        db.Tag.findById(tagId)
            .then(function(tag){
                tag.destroy();
                res.status(200).send("'" + tag.name +  "'" + " was removed from the database");

            })
            .catch(function (err) {
                res.status(500).send(err.message);

            });
};






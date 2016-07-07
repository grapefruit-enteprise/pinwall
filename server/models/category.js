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

exports.categoryUpdate = function(req, res, paramId){
    var updatedCat = {
        title: req.body.title,
        description: req.body.description
    }

    console.log("line 21: Cat", paramId);
    db.Category.update(updatedCat,{ where: { id: paramId }})
        .then(function (result) {
        // result is the number of records affected
            console.log("line 24: Cat model", result)
        })
        .catch(function (err) {
            console.error("line 27: Cat  Model",err.message);
        })
}

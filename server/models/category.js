var db = require('../db.js');

exports.categoriesFetched = function(req, res, orgId){

    db.Organization.findById(orgId)
        .then(function(organization){
            organization.getCategories()
            .then(function(categories){
                console.log("All notes ", JSON.stringify(categories, null ,4));
                res.status(200).send(categories);
            })
            .catch(function (err) {
                console.error("line 13: Note  Model", err.message);
                res.status(500).send(err.message);

            });
    });
}



exports.categoryCreate = function(req, res, newCat){
    console.log("line 4: category",newCat);
    db.Category.create(newCat)
        .then(function(category){
            res.status(200).send(category);
        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);

    });
};

exports.categoryUpdate = function(req, res, updatedCat, paramId){

    console.log("line 18: Cat", paramId);
    db.Category.update(updatedCat,{ where: { id: paramId }})
        .then(function (result) {
        // result is the number of records affected
            console.log("line 22: Cat model", result);
            res.status(200).send(result + " Categories have been updated in the database");

        })
        .catch(function (err) {
            console.error("line 25: Cat  Model",err.message);
            res.status(500).send(err.message);

        });
};
exports.categoryDelete = function(req, res){
        var catId = req.params.id;
        console.log(catId);
        db.Category.findById(catId)
        .then(function(category){
            category.destroy();
            console.log("'" + category.title + "'" + " was removed from the database");
            res.status(200).send("'" + category.title +  "'" + " was removed from the database");

        })
        .catch(function (err) {
            console.error("line 39: Cat  Model", err.message);
            res.status(500).send(err.message);

        });
};

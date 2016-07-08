var db = require('../db.js');

exports.organizationsFetched = function(req, res){
    db.Organization.findAll()
        .then(function(organizations){
            console.log("All notes ", JSON.stringify(organizations, null ,4));
            res.status(200).send(organizations);
        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);
        });
};

exports.organizationCreate = function(req, res, newOrg) {
    console.log("line 6: note", newOrg);
    db.Organization.create(newOrg)
        .then(function(organization){
            console.log("line 9: Organization has been Created");
            res.status(200).send(organization);

        })
        .catch(function(err){
            console.error(err.message);
            res.status(500).send(err.message);
        });
};

exports.organizationUpdate = function(req, res, updatedOrg, orgId){

    console.log("line 19: updatedOrg", updatedOrg);
    console.log("line 20: orgId", orgId);
    db.Organization.update(updatedOrg,{ where: { id: orgId }})
        .then(function (result) {
            console.log("line 45: Notes model", JSON.stringify(result));
            console.log(result + " organization has been updated");
            res.status(200).send(result + " organization has been updated");

        })
        .catch(function (err) {
            console.error("line 27: Notes Model", err.message);
            res.status(500).send(err.message);
        });
};

exports.organizationDelete = function(req, res){
        var orgId = req.params.id
        console.log(orgId);
        db.Organization.findById(orgId)
        .then(function(organization){
            organization.destroy();
            console.log(organization.name + " was removed from the database");
        })
        .catch(function (err) {
            console.error("line 46: Notes Model", err.message);
            res.status(500).send(err.message);
        });
};

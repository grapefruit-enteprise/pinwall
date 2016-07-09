var helper = require('../helperFN/helpers.js')
var db     = require('../db.js')
var Note   = require("./note.js")




module.exports = {
  'notes': {
    get: function(callback){
      console.log('Model get inside Notes ');
      var data = helper.retrieveData();
      callback(data);
    },
    post: function(callback, params){
      console.log( "Model post inside Notes")
      helper.saveData(callback, params)
    },
    delete: function(callback, params){
        console.log( "Model post DELETE")
        helper.deleteData(callback, params)
      },
    put: function(callback, params){
      console.log( "Model post inside Notes")
      helper.updateData(callback, params)
    }

  }



}

















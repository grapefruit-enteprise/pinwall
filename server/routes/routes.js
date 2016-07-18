var controllers =
require('../controller/appController.js');
var router = require('express').Router();
console.log("in routes ")
for(var route in  controllers) {
  router.route('/' + route)
  .get(controllers[route].get)
  .post(controllers[route].post)
  .put(controllers[route].put)
  .delete(controllers[route].delete)
  ;
}

module.exports = router;

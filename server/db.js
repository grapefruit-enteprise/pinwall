var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://admin:MSTTGVCHDZJPXQPV@aws-us-east-1-portal.12.dblayer.com:10825/compose');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var Organization = sequelize.define('Organization', {
      name       : Sequelize.STRING,
      address    : Sequelize.STRING,
      city       : Sequelize.STRING,
      state      : Sequelize.STRING,
      phone      : Sequelize.STRING,
      createdAt  : Sequelize.DATE,
      updatedAt  : Sequelize.DATE,
      description: Sequelize.TEXT,
      img        : Sequelize.STRING,
    },{
      tableName  : 'Organizations', // this will define the table's name
      timestamps : true   // this will deactivate the timestamp columns
});

//
//var User = sequelize.define('Note', {
//      username  : Sequelize.STRING,
//      createdAt : Sequelize.DATE,
//      updatedAt : Sequelize.DATE,
//      email     :{
//        type: Sequelize.STRING,
//          validate:{
//              isEmail: true
//          }
//      },
//      password  : Sequelize.STRING,
//    },{
//      tableName: 'Users', // this will define the table's name
//      timestamps: true   // this will deactivate the timestamp columns
//});



var Note = sequelize.define('Note', {
      title     : Sequelize.STRING,
      createdAt : Sequelize.DATE,
      updatedAt : Sequelize.DATE,
      content   : Sequelize.TEXT,
      img       : Sequelize.STRING,
    },{
      tableName : 'Notes', // this will define the table's name
      timestamps: true   // this will deactivate the timestamp columns
});


var Category = sequelize.define('Category', {
      title      : Sequelize.STRING,
      description: Sequelize.TEXT,
      createdAt  : Sequelize.DATE,
      updatedAt  : Sequelize.DATE,

    },{
      tableName  : 'Categories', // this will define the table's name
      timestamps : true   // this will deactivate the timestamp columns
});



// Association - Relationships
Organization.hasMany(Note,       {foreignKey: 'organizationId'});
Organization.hasMany(Category,   {foreignKey: 'organizationId'});

Note.belongsToMany(Category, {through: 'NotesCategories', foreignKey: 'noteId'});
Category.belongsToMany(Note, {through: 'NotesCategories', foreignKey: 'catId'});

sequelize.sync().then(function(){
    console.log("Created tables in db.js");
});

/// Exports to models
exports.Note         = Note;
exports.Category     = Category;
exports.Organization = Organization;































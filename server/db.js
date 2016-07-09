var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://admin:MSTTGVCHDZJPXQPV@aws-us-east-1-portal.12.dblayer.com:10825/compose');

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var Organization = sequelize.define('Organization', {
      name       : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
          }
        },
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


var User = sequelize.define('User', {
      username  : {
        type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
              }
            },
      firstname : Sequelize.STRING,
      lastname  : Sequelize.STRING,
      createdAt : Sequelize.DATE,
      updatedAt : Sequelize.DATE,
      email     : {
        type: Sequelize.STRING,
          allowNull: false,
          unique   : true,
          validate :{
              isEmail : true,
              notEmpty: true
          }
      },
      password  : {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [7,100]
              }
            },
    },{
      tableName: 'Users',
      timestamps: true
});

//var Role = sequelize.define('Role', {
//     admin     : Sequelize.STRING,
//     editor    : Sequelize.STRING,
//     read_only : Sequelize.STRING,
//     createdAt : Sequelize.DATE,
//     updatedAt : Sequelize.DATE,
//     },
//
//   },{
//     tableName: 'Roles', // this will define the table's name
//     timestamps: true   // this will deactivate the timestamp columns
//});



var Note = sequelize.define('Note', {
      title      : {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
            }
        },
      content   : {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            notEmpty: true
          }
        },
      createdAt : Sequelize.DATE,
      updatedAt : Sequelize.DATE,
      img       : Sequelize.STRING
    },{
      tableName : 'Notes', // this will define the table's name
      timestamps: true   // this will deactivate the timestamp columns
});


var Category = sequelize.define('Category', {
      title      : {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
          }
        },
      description: Sequelize.TEXT,
      createdAt  : Sequelize.DATE,
      updatedAt  : Sequelize.DATE,

    },{
      tableName  : 'Categories', // this will define the table's name
      timestamps : true   // this will deactivate the timestamp columns
});
var Tag = sequelize.define('Tag', {
     name: {
        type:Sequelize.STRING,
        allowNull: false,
        validate : {
            notEmpty: true
        }
     },
     createdAt : Sequelize.DATE,
     updatedAt : Sequelize.DATE

   },{
     tableName: 'Tags', // this will define the table's name
     timestamps: true   // this will deactivate the timestamp columns
});



// Association - Relationships
//User.hasOne(Organization, )
Organization.hasMany(User,       {foreignKey: 'organizationId'});
Organization.hasMany(Note,       {foreignKey: 'organizationId'});
Organization.hasMany(Category,   {foreignKey: 'organizationId'});

Note.belongsToMany(Category, {through: 'NotesCategories', foreignKey: 'noteId'});
Category.belongsToMany(Note, {through: 'NotesCategories', foreignKey: 'catId'});

Note.belongsToMany(Tag, {through: 'NotesTags', foreignKey: 'noteId'});
Tag.belongsToMany(Note, {through: 'NotesTags', foreignKey: 'tagId'});

sequelize.sync().then(function(){
    console.log("Created tables in db.js");
});
// will drop the tables and init them
//sequelize.sync({force:true}).then(function(){
//    console.log("Created tables in db.js");
//});

/// Exports to models
exports.User         = User;
exports.Note         = Note;
exports.Category     = Category;
exports.Organization = Organization;
exports.Tag          = Tag;































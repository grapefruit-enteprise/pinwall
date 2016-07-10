# pinwall

→ Summary by categories

	→ only admins can create categories?

		→ e.g. Updates, events, links, slides, etc.

		→ request to create category

→ Basic requirements

	→ **Login/User Authentication **(Priority)

		→ individual

		→ organization

			→ admin

			→ user(s)

	→ **Notes** (Priority)

		→ CRUD

	→ Category

		→ CRUD

	→ Deploy

→ Advanced

	→ Admin portal

	→ ‘Skinnable’ (customize)

	→ Tags for notes (sorting)

	→ Link related notes

	→ Permissions for reading/editing notes

	→ Bulk edit

	→ Tool to format code snippets

→ Materials to learn/use

	→ React?

	→ SQL?

	→ Bootstrap

	→ Redux

→ CRUD

	→ Create

		→ Populate

			→ Fields

				→ title/subject?

				→ date

				→ body

				→ images (optional)

				→ links (optional)

			→ Select category

			→ How is it aware of category/org/user?

		→ Hit ‘save’ endpoint

	→ Read

		→ Pop-up

		→ Expand redirects to new page with full functionality?

	→ Update

		→ Check user permissions

	→ Delete

		→ Check user permissions

→ Presentation

	

___________________________________________________________________________

PINWALL

Build scaffolding for our app

Front end: Steph and Joe

	

* Research React 

* Welcome 

    * invite the user to sign up or sign in

* Layout page(template)

    *  nav

    *  footer

* note show page 

    * specific note with ID 

    * popup for update 

    * icon for delete

Backend: Marco and Chadd

* Modify nav html/css : Marco

* Hosting on compose for PG 

* Building the schema 

* CRUD for notes table

Html template: Marco  

___________________________________________________________________________

Front end: Steph and Joe

* Board view:

    * will show all notes for User or Organization 

    * will have a popup to create a new note 

    * filter by categories and/or date 

    * ability to pin to top

Backend: Marco and Chadd

* Create categories and join with note

________________________________________________

Organization …. Has_many Users

User belongs_to Organization

User has_many Notes

Note belongs_to User

Categories has_many Notes

Notes has_many Categories

Roles: 

	Id: NUMBER

	Role: VARCHAR

**Notes**: 

id: NUMBER

body: VARCHAR

title: VARCHAR

images:

**Organization**

id: number

name: VARCHAR

**Users**

id: number

first_name : VARCHAR

last_name: VARCHAR

username: VARCHAR

email: VARCHAR

password: VARCHAR

paid: true/false

date_created: date

**Roles**

admin

editor

Read-only

________________________________________________

* Organization admins

    * can create categories

    * can create notes, delete or edit any note

* Organization editor

    * can create notes. 

    * edit and update their own notes 

* * *


**DOCUMENTS**

![image alt text](image_0.png)

Database Schema PG

Hosted using  **[https://app.compose.io/evolutionman/deployment**s](https://app.compose.io/evolutionman/deployments)

**Username: mberardini@evolution-man.com**

**Password: 12Fashion**

**NOTES  ****with admin role**

____________________________________________________________________________

					api/organizations/:orgId/notes GET

**Expected**   **call path from clientside **

**Returns **an array of notes as objects

[

  {

    "id": 1,

    "title": "Etiam At Risus Et",

    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",

    "createdAt": "2016-07-08T19:01:45.494Z",

    "updatedAt": "2016-07-08T19:01:45.494Z",

    "img": "http://poemiddle.gif",

    "organizationId": 1,

     "userId": 1

  },

  {

    "id": 2,

    "title": "The 2nd Etiam At Risus Et",

    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",

    "createdAt": "2016-07-08T19:07:57.796Z",

    "updatedAt": "2016-07-08T19:07:57.796Z",

    "img": "http://poemiddle.gif",

    "organizationId": 1,

     "userId": 1

  }

]

____________________________________________________________________________

api/organizations/:orgId/notes/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

____________________________________________________________	

**____________________________________________________________________________**

             api/organizations/:orgId/notes/:id PUT

**Expected** req.body

{   

   "title": "Quinoa yuccie fixie",

   "content":"lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class."

   ,

   "img": "[http://poemidddDDDDDDm.gif](http://poemidddddddddm.gif/)",

   "categories": [1,4] ,

   "tags": "Blue white soft" 

}

**Returns** nothing

____________________________________________________________________________

			        api/organizations/:orgId/categories/:id GET

**Expected**   **call path from clientside **

**Returns **an array of notes as objects

[

  {

    "id": 2,

    "title": "Quinoa yuccie fixie",

    "content": "lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

    "createdAt": "2016-07-09T22:49:58.530Z",

    "updatedAt": "2016-07-09T22:49:58.530Z",

    "img": "http://poemidddDDDDDDm.gif",

    "organizationId": 1,

    "userId": 1,

    "NotesCategories": {

      "createdAt": "2016-07-09T22:49:58.990Z",

      "updatedAt": "2016-07-09T22:49:58.990Z",

      "noteId": 2,

      "catId": 1

    }

  },

  {

    "id": 5,

    "title": "Quinoa yuccie fixie",

    "content": "lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

    "createdAt": "2016-07-09T23:02:28.602Z",

    "updatedAt": "2016-07-09T23:02:28.602Z",

    "img": "http://poemidddDDDDDDm.gif",

    "organizationId": 1,

    "userId": 1,

    "NotesCategories": {

      "createdAt": "2016-07-09T23:02:29.050Z",

      "updatedAt": "2016-07-09T23:02:29.050Z",

      "noteId": 5,

      "catId": 1

    }

  },

  {

    "id": 6,

    "title": "ZXxXXXXXXXXXXXXXXXXQuinoa yuccie fixie",

    "content": "lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

    "createdAt": "2016-07-09T23:04:10.436Z",

    "updatedAt": "2016-07-09T23:04:10.436Z",

    "img": "http://poemidddDDDDDDm.gif",

    "organizationId": 1,

    "userId": 1,

    "NotesCategories": {

      "createdAt": "2016-07-09T23:04:10.877Z",

      "updatedAt": "2016-07-09T23:04:10.877Z",

      "noteId": 6,

      "catId": 1

    }

  }

]

**NOTES FOR USER ****these routes are accessed through the user **

____________________________________________________________________________			          api/organizations/:orgId/user/:userId/notes GET

**Expected**   **call path from clientside **

**Returns **an array of notes as objects

[

  {

    "id": 1,

    "title": "Etiam At Risus Et",

    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",

    "createdAt": "2016-07-08T19:01:45.494Z",

    "updatedAt": "2016-07-08T19:01:45.494Z",

    "img": "http://poemiddle.gif",

    "organizationId": 1,

     "userId": 1

  },

  {

    "id": 2,

    "title": "The 2nd Etiam At Risus Et",

    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",

    "createdAt": "2016-07-08T19:07:57.796Z",

    "updatedAt": "2016-07-08T19:07:57.796Z",

    "img": "http://poemiddle.gif",

    "organizationId": 1,

     "userId": 1

  }

]

**____________________________________________________________________________**

api/organizations/:orgId/user/:userId/notes POST 

**Expected** req.body

{   

   "title": "Quinoa yuccie fixie",

   "content":"lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class."

   ,

   "img": "[http://poemidddDDDDDDm.gif](http://poemidddddddddm.gif/)",

   "categories": [1,4] ,

   "tags": "Blue white soft" 

   "userId": 1 

}

**Returns** nothing

**____________________________________________________________________________**

 api/organizations/:orgId/user/:userId/notes:id PUT

**Expected** req.body

{   

   "title": "Quinoa yuccie fixie",

   "content":"lum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class."

   ,

   "img": "[http://poemidddDDDDDDm.gif](http://poemidddddddddm.gif/)",

   "categories": [1,4] ,

   "tags": "Blue white soft" 

   "userId"  : 1 

}

**Returns** nothing

____________________________________________________________________________

          api/organizations/:orgId/user/:userId/notes DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

____________________________________________________________	

**CATEGORIES**

**____________________________________________________________________________** 

  api/organizations/:orgId/categories GET

**Expected** req.params ** we only need the id appended to the link**

**Return **an array of categories as objects

[

  {

    "id": 1,

    "title": "Nullam In",

    "description": "aAt nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet     egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

    "createdAt": "2016-07-08T18:55:10.534Z",

    "updatedAt": "2016-07-08T18:55:10.534Z",

    "organizationId": 1

  },

  {

    "id": 3,

    "title": "The 3rd one of Nullam In",

    "description": "Same thins as at nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet     egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

    "createdAt": "2016-07-08T18:58:11.032Z",

    "updatedAt": "2016-07-08T18:58:11.032Z",

    "organizationId": 1

  }

]

____________________________________________________________________________

	     	      api/organizations/:orgId/categories POST 

**Expected** req.body

{   

"title": "Nullam In",

"description":"aAt nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet     egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.", 

    "organizationId": "1"

}

**Returns** 

	{

  "id": 1,

  "title": "Nullam In",

  "description": "aAt nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet     egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class.",

  "organizationId": 1,

  "updatedAt": "2016-07-09T01:56:47.537Z",

  "createdAt": "2016-07-09T01:56:47.537Z"

}

**____________________________________________________________________________**

    			       api/organizations/:orgId/categories PUT 

**Expected** req.body

{   

   "title": "Nullam In",

   "description":"aAt nulla justo, eget luctus tortor. Nulla facilisi. Duis    aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class."

}

**Returns** nothing

____________________________________________________________

api/organizations/:orgId/categories/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

**ORGANIZATIONS**

____________________________________________________________

 api/organizations GET

**Expected** req.params ** we only need the id appended to the link**

**Return **an array of organizations as objects

[

  {

    "id": 1,

    "name": "Grapefruit Ent.",

    "address": "604 Arizona",

    "city": "Santa Monica",

    "state": "CA",

    "phone": "555-555-5555",

    "createdAt": "2016-07-08T02:40:57.114Z",

    "updatedAt": "2016-07-08T02:56:56.557Z",

    "description": "This is the best company ever!",

    "img": "http:/image.com"

  },

  {

    "id": 4,

    "name": "Orange Ent.",

    "address": "999 Arizona",

    "city": "Santa Monica",

    "state": "CA",

    "phone": "666-555-5555",

    "createdAt": "2016-07-08T03:16:18.262Z",

    "updatedAt": "2016-07-08T03:16:18.262Z",

    "description": "This is the second best company ever!",

    "img": "http:/image.com"

  }

]

____________________________________________________________________________

								api/organizations POST 

**Expected** req.body 

{

    "name"       : "Grapefruit",

   "address"     :  "604 Arizona",

    "city"       : "Santa Monica",

    "state"      : "CA",

    "phone"      : "555-555-5555",

    "description": "This is the best company ever!",

    "img"        : "http:/image.com"

}

**Returns** nothing

____________________________________________________________________________

____________________________________________________________________________

   api/organizations/:id PUT

**Expected** req.body

{

    "name"       : "Grapefruit Ent",

   "address"     :  "6666 Arizona",

    "city"       : "Santa Monica",

    "state"      : "CA",

    "phone"      : "555-555-5555",

    "description": "This is the best company ever!",

    "img"        : "http:/image.com"

}

**Returns** nothing

**____________________________________________________________________________**

api/organizations/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

**TAGS**

____________________________________________________________________________	

   api/organizations/:orgId/tags GET

**Expected**   **call path from clientside **

**Returns **an array of tags as objects

[

  {

    "id": 1,

    "name": "blue",

    "createdAt": "2016-07-09T01:59:58.010Z",

    "updatedAt": "2016-07-09T01:59:58.010Z"

  },

  {

    "id": 2,

    "name": "white",

    "createdAt": "2016-07-09T01:59:58.380Z",

    "updatedAt": "2016-07-09T01:59:58.380Z"

  },

]

____________________________________________________________ 

					   api/organizations/:orgId/tags POST 

**Expected** req.body 

{

    "name"  : "tagname"

}

**Returns** nothing

____________________________________________________________________________

    organizations/:orgId/tags/:id PUT

**Expected** req.body

{

    "name"  : "tagname"

}

**Returns** nothing

**____________________________________________________________________________**

**____________________________________________________________________________**

  api/organizations/:orgId/tags/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

____________________________________________________________

**USERS**

____________________________________________________________________________	

   api/organizations/:orgId/users GET

**Expected**   **call path from clientside **

**Returns **an array of users as objects

[

  {

    "id": 1,

    "username": "mb0606",

    "firstname": "marco",

    "lastname": "smith",

    "createdAt": "2016-07-09T15:41:45.295Z",

    "updatedAt": "2016-07-09T15:41:45.295Z",

    "email": "jaysmith@example.com",

    "password": "password",

    "organizationId": 1

  },

  {

    "id": 4,

    "username": "mb0606",

    "firstname": "Barry",

    "lastname": "Kmith",

    "createdAt": "2016-07-09T16:00:03.276Z",

    "updatedAt": "2016-07-09T16:00:03.276Z",

    "email": "barrysmith@example.com",

    "password": "password",

    "organizationId": 1

  }

]

____________________________________________________________ 

					  api/organizations/:orgId/users POST 

**Expected** req.body 

{

    "username"       : "mb0606",

    "firstname"      : "Barry",

    "lastname"       : "Kmith",

    "email"          : "[jaysmith@example.com](mailto:jaysmith@example.com)",  unique

    "password"       : "password",

    "organizationId" : 1

}

**Returns** 

{

    "username"       : "mb0606",

    "firstname"      : "Barry",

    "lastname"       : "Kmith",

    "email"          : "jaysmith@example.com",

    "password"       : "password",

    "organizationId" : 1

}

____________________________________________________________________________

   organizations/:orgId/users/:id PUT

**Expected** req.body

{

    "username"       : "mb0606",

    "firstname"      : "Jamie",

    "lastname"       : "Kmith",

    "email"          : "barrysmith@example.com",

    "password"       : "password",

    "organizationId" : 1

}

**Returns** nothing

**____________________________________________________________________________**

     organizations/:orgId/users/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

____________________________________________________________

**LOGIN / LOGOUT**

____________________________________________________________________________	

   api/organizations/:orgId/users GET

**Expected**   **call path from clientside **

**Returns **an array of users as objects

[

  {

    "id": 1,

    "username": "mb0606",

    "firstname": "marco",

    "lastname": "smith",

    "createdAt": "2016-07-09T15:41:45.295Z",

    "updatedAt": "2016-07-09T15:41:45.295Z",

    "email": "jaysmith@example.com",

    "password": "password",

    "organizationId": 1

  },

  {

    "id": 4,

    "username": "mb0606",

    "firstname": "Barry",

    "lastname": "Kmith",

    "createdAt": "2016-07-09T16:00:03.276Z",

    "updatedAt": "2016-07-09T16:00:03.276Z",

    "email": "barrysmith@example.com",

    "password": "password",

    "organizationId": 1

  }

]

____________________________________________________________ 

					  api/organizations/:orgId/users POST 

**Expected** req.body 

{

    "username"       : "mb0606",

    "firstname"      : "Barry",

    "lastname"       : "Kmith",

    "email"          : "[jaysmith@example.com](mailto:jaysmith@example.com)",  unique

    "password"       : "password",

    "organizationId" : 1

}

**Returns** 

{

    "username"       : "mb0606",

    "firstname"      : "Barry",

    "lastname"       : "Kmith",

    "email"          : "jaysmith@example.com",

    "password"       : "password",

    "organizationId" : 1

}

____________________________________________________________________________

   organizations/:orgId/users/:id PUT

**Expected** req.body

{

    "username"       : "mb0606",

    "firstname"      : "Jamie",

    "lastname"       : "Kmith",

    "email"          : "barrysmith@example.com",

    "password"       : "password",

    "organizationId" : 1

}

**Returns** nothing

**____________________________________________________________________________**

     organizations/:orgId/users/:id DELETE

**Expected** req.params ** we only need the id appended to the link**

**Returns** nothing

____________________________________________________________

**CODE STYLE GUIDE**

**Naming variable and functions**

*Use camel case*

*example:*

  'organizations/:orgId/tags': {

    get:function(req, res){

        var tagId = req.params.id;

        Tags.tagsFetched(req, res)

    }

}

**Parameters and commas**

*Parameters should only have a space after the comma*

*example:*

function(req, res, newNote, categories, tags) {}

**Spacing when declaring a function**

*No space between function and parenthesis* 

function(req, res){}

**Alignment when declaring object or variables**

*Line up colons and equal signs*

var updatedOrg = {

            name          : req.body.name,

            address      : req.body.address,

            city              : req.body.city,

            state           : req.body.state,

            phone         : req.body.phone,

            description : req.body.description,

            img             : req.body.img

  }

var models           = require('../models/appModel');

var Notes             = require('../models/note');

var Categories     = require('../models/category');

* * *


**RELEVANT LINKS**

**TinyMCE React**

[https://www.tinymce.com/docs/integrations/react/](https://www.tinymce.com/docs/integrations/react/)

**Sockets.io React Node (lynda video)**

[https://www.lynda.com/Web-Development-tutorials/Setting-up-React-router/387145/433103-4.html](https://www.lynda.com/Web-Development-tutorials/Setting-up-React-router/387145/433103-4.html)

**Link Previews**

[http://embed.ly/](http://embed.ly/)

**Code Snippets**

**	**React-ACE

**[https://github.com/securingsincity/react-ac**e](https://github.com/securingsincity/react-ace)

**	**

Prism

[http://prismjs.com/](http://prismjs.com/)

**Database - Compose**

**[https://app.compose.io/evolutionman/deployments/evolutionman-postgresql/postgresql/databases/compose/schemas/public/tables/Users/row**s](https://app.compose.io/evolutionman/deployments/evolutionman-postgresql/postgresql/databases/compose/schemas/public/tables/Users/rows)

**Trello link**

[https://trello.com/b/lHmC7UIN/pinwall](https://trello.com/b/lHmC7UIN/pinwall)

**Useless Sequelize Docs**

[http://docs.sequelizejs.com/en/latest/](http://docs.sequelizejs.com/en/latest/)

**Sequelize guide**

To be created

**Schema Builder (load: pinwall)**

[http://ondras.zarovi.cz/sql/demo/](http://ondras.zarovi.cz/sql/demo/)


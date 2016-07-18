## Developer Documentation
#### Tools Used:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [React Router](https://github.com/rackt/react-router)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.github.io/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Sass](http://sass-lang.com/)
* [Bootstrap](http://getbootstrap.com/)
* [TinyMCE](https://react-bootstrap.github.io/)
* [React Bootstrap](https://react-bootstrap.github.io/)


```
* Install server and client dependencies
* Generate bundle.js file and compile ES6 syntax using Babel
* Run the app on a local server
```

```
npm install 
```
```
webpack -p
```
```
node server/server.js
```
```
* Visit http://localhost:8080/ on your browser for the landing page
```
or visit https://pinwall-beta.herokuapp.com/

## Front-End
Pinwall's client side is built using React, Redux, and Bootstrap. 

### Client Application Information

```
client
├── actions
│   ├── auth.js
│   ├── categories.js
│   ├── notes.js
│   └── types.js
│
├── assets
│   ├── css
│   ├── images
│   └── js
│   
├── components
│   ├── auth
│   │   ├── require-auth.js
│   │   ├── signing.js
│   │   └── signup.js
│   ├── notes
│   │   ├── note-card.js
│   │   ├── note-form-edit.js
│   │   ├── note-form.js
│   │   └── show-note.js
│   ├── notes
│   ├── app.js
│   ├── categories.js
│   ├── navbar.js
│   ├── wall.js
│   └── welcome.js
│   
├── config
│   └── routes.js
│  
├── reducers
│   ├── auth_reducer.js
│   ├── categories-reducer.js
│   ├── notes-reducer.js.js
│   └── index.js
│  
├── static
│   ├── assets
│   └── styles
│  
└── index.html
```

---

## Back-End
The Pinwall Custom RESTful API is built with Node.js, Node Express, Sequelize, and Postgres.

### Server
The Node.js/Express server has the following routes and functions.
```
server
├── config
│   └── middleware.js
│
├── controller
│   └── appController.js
│
├── helperFN
│   └── helpers.js
│
├── models
│   ├── appModel.js
│   ├── category.js
│   ├── note.js
│   ├── organization.js
│   ├── tag.js
│   └── user.js
│
├── routes
│   └── route.js
│
├── db.js
└── server.js
```


## REST/CRUD Outline:

```
AUTHENTICATION

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ─────────────  ────────────────────────────────────   ────────────────────────────────
api/users/login                                │ POST         │ {                                    │ *** if successful                       
                                               │              │  'email': 'barrysmith@example.com'   │   
                                               │              │  'password': 'password'              │ 
                                               │              │ }                                    │ 
api/users/signup                               │ POST         │ {                                    │ *** if successful
                                               │              │  'username': 'barry123' ,            │ 
                                               │              │  'firstname': 'Barry',               │ 
                                               │              │  'lastname': 'Smith',                │ 
                                               │              │  'email': 'barrysmith@example.com',  │ 
                                               │              │  'password': 'password',             │ 
                                               │              │  'organizationId': 1                 │ 
                                               │              │ }                                    │ 
api/user/:userId/organizations                 │ GET          │                                      │ *** All organizations for user as array of objects



NOTES (with admin access)

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ──────────────────────────────────────
api/organizations/:orgId/notes                 │ GET          │ **** Call path from client           │ * Array of notes as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'title': 'Notes for Lecture',
                                               │              │                                      │  'content': 'These are the notes.',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'img': 'http://image.gif',
                                               │              │                                      │  'organizationId': 1,
                                               │              │                                      │  'userId': 1
                                               │              │                                      │ }]
api/organizations/:orgId/notes/:id             │ DELETE       │                                      │ 
api/organizations/:orgId/notes/:id             │ PUT          │ {                                    │ 
                                               │              │  'title': 'Notes',                   │ 
                                               │              │  'content': 'This is the content',   │ 
                                               │              │  'img': 'http://picture.jpg',        │ 
                                               │              │  'categories': [1,4],                │ 
                                               │              │  'tags': 'School'                    │ 
                                               │              │ }                                    │ 
api/organizations/:orgId/categories/:id        │ GET          │ ** Call path from client             │ * Array of notes as objects
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 2,
                                               │              │                                      │  'title': 'Note Response',
                                               │              │                                      │  'content': 'Content of note sent as response.', 
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'img': 'http://response.gif',
                                               │              │                                      │  'organizationId': 1,
                                               │              │                                      │  'userId': 1,
                                               │              │                                      │  'NotesCategories': {
                                               │              │                                      │    'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │    'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │    'noteId': 2,
                                               │              │                                      │    'catId': 2,
                                               │              │                                      │   }
                                               │              │                                      │  }]

NOTES (for user)

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ───────────────────────────────────
api/organizations/:orgId/user/:userId/notes    │ GET          │ **** Call path from client           │ * Array of notes as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'title': 'Notes for Lecture',
                                               │              │                                      │  'content': 'These are the notes.',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'img': 'http://image.gif',
                                               │              │                                      │  'organizationId': 1,
                                               │              │                                      │  'userId': 1
                                               │              │                                      │ }]
api/organizations/:orgId/user/:userId/notes    │ DELETE       │ ** Id appended to link               │ 
api/organizations/:orgId/user/userId/notes/:id │ PUT          │ {                                    │ 
                                               │              │  'title': 'Notes',                   │ 
                                               │              │  'content': 'This is the content',   │ 
                                               │              │  'img': 'http://picture.jpg',        │ 
                                               │              │  'categories': [1,4],                │ 
                                               │              │  'tags': 'School'                    │ 
                                               │              │ }                                    │ 
api/organizations/:orgId/user/:userId/notes    │ POST         │ {                                    │ 
                                               │              │  'title': 'New Note',                │  
                                               │              │  'content': 'This is a new note.',   │  
                                               │              │  'img': 'http://post.png',           │  
                                               │              │  'categories': [1,3],                │ 
                                               │              │  'tags': 'tech',                     │ 
                                               │              │  'userId': 2,                        │  
                                               │              │ }                                    │

CATEGORIES

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ───────────────────────────────────
api/organizations/:orgId/categories            │ GET          │ ** Id appended to link               │ * Array of categories as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'title': 'Category Example',
                                               │              │                                      │  'description': 'This is a category',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'organizationId': 1,
                                               │              │                                      │ }]
api/organizations/:orgId/user/:userId/notes    │ DELETE       │ ** Id appended to link               │ 
api/organizations/:orgId/user/userId/notes/:id │ PUT          │ {                                    │ 
                                               │              │  'title': 'Cat',                     │ 
                                               │              │  'description': 'A category',        │                      
                                               │              │ }                                    │ 
api/organizations/:orgId/categories            │ POST         │ {                                    │ {
                                               │              │  'title': 'Another Category',        │  'id': 1,
                                               │              │  'description': 'New category',      │  'title': 'Another Category', 
                                               │              │  'organizationId': 1                 │  'description': 'New category',                         
                                               │              │ }                                    │  'organizationId': 1,
                                               │              │                                      │  'updatedAt': '2016-07-09T01:56:47.537Z',
                                               │              │                                      │  'createdAt': '2016-07-09T01:56:47.537Z'
                                               │              │                                      │  }

ORGANIZATIONS

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ───────────────────────────────────
api/organizations                              │ GET          │ ** Id appended to link               │ * Array of organizations as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'name': 'Grapefruit Enterprise',
                                               │              │                                      │  'address': '604 Arizona Ave',
                                               │              │                                      │  'city': 'Santa Monica',
                                               │              │                                      │  'state': 'CA',
                                               │              │                                      │  'phone': '(555) 555-5555',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'description': 'The best company',
                                               │              │                                      │  'img': 'http://image.com',
                                               │              │                                      │ }]
api/organizations/:orgId/user/:userId/notes    │ DELETE       │ ** Id appended to link               │ 
api/organizations/:orgId/user/userId/notes/:id │ PUT          │ {                                    │ 
                                               │              │  'name': 'Grapefruit',               │  
                                               │              │  'address': '604 Arizona Ave',       │
                                               │              │  'city': 'Santa Monica',             │ 
                                               │              │  'state': 'CA',                      │  
                                               │              │  'phone': '(555) 555-5555',          │  
                                               │              │  'description': 'This is a company', │  
                                               │              │  'img': 'http://img.com'             │                   
                                               │              │ }                                    │ 
api/organizations                              │ POST         │ {                                    │ 
                                               │              │  'name': 'Grapefruit',               │  
                                               │              │  'address': '604 Arizona Ave',       │
                                               │              │  'city': 'Santa Monica',             │ 
                                               │              │  'state': 'CA',                      │  
                                               │              │  'phone': '(555) 555-5555',          │  
                                               │              │  'description': 'This is a company', │  
                                               │              │  'img': 'http://img.com'             │ 
                                               │              │ }                                    │ 

TAGS

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ───────────────────────────────────
api/organizations/:orgId/tags                  │ GET          │ ** Call path from client             │ * Array of tags as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'name': 'tag',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z'
                                               │              │                                      │ }]
api/organizations/:orgId/tags/:id              │ DELETE       │ ** Id appended to link               │ 
api/organizations/:orgId/tags/:id              │ PUT          │ {                                    │ 
                                               │              │  'name': 'tag1',                     │  
                                               │              │ }                                    │
api/organizations/:orgId/tags                  │ POST         │ {                                    │ 
                                               │              │  'name': 'tag',                      │   
                                               │              │ }                                    │ 

USERS

ENDPOINT                                         METHOD         EXPECTED                               RESPONSE
──────────────────────────────────────────────   ────────────   ────────────────────────────────────   ───────────────────────────────────
api/organizations/:orgId/users                 │ GET          │ ** Call path from client             │ * Array of users as objects                      
                                               │              │                                      │ [{
                                               │              │                                      │  'id': 1, 
                                               │              │                                      │  'username': 'mb0606',
                                               │              │                                      │  'firstname': 'Barry',
                                               │              │                                      │  'lastname': 'Smith',
                                               │              │                                      │  'createdAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'updatedAt': '2016-07-09T22:49:58.990Z',
                                               │              │                                      │  'email': 'barrysmith@example.com',
                                               │              │                                      │  'password': 'password',
                                               │              │                                      │  'organizationId': 1,
                                               │              │                                      │ }]
api/organizations/:orgId/users/:id             │ DELETE       │ ** Id appended to link               │ 
api/organizations/:orgId/users/:id             │ PUT          │ {                                    │ 
                                               │              │  'username': 'bsmith78',             │  
                                               │              │  'firstname': 'Jamie',               │
                                               │              │  'lastname': 'Smith',                │ 
                                               │              │  'email': 'jsmith@fakemail.com',     │  
                                               │              │  'password': 'password1',            │  
                                               │              │  'organizationId': 1                 │                     
                                               │              │ }                                    │ 
api/organizations/:orgId/users                 │ POST         │ {                                    │ {
                                               │              │  'username': 'mb0606',               │  'username': 'mb0606',
                                               │              │  'firstname': 'Barry',               │  'firstname': 'Barry',
                                               │              │  'lastname': 'Smith',                │  'lastname': 'Smith',
                                               │              │  'email': 'bsmith@example.com',      │  'email': 'bsmith@example.com',
                                               │              │  'password': 'password',             │  'password': 'password',
                                               │              │  'organizationId': 1,                │  'organizationId': 1
                                               │              │ }                                    │ }


NOTES

```







![pinwalldemo](https://cloud.githubusercontent.com/assets/13357063/16933320/3807d3ac-4d01-11e6-97d1-fc0476f10b1d.gif)










## The Pinwall Team
* [Chadd Bennett](https://github.com/chaddbennett)
* [Marco Berardini](https://github.com/mb0606)
* [Joseph Capezzuto](https://github.com/Capezzuto)
* [Stephanie Velazquez](https://github.com/stephvelazquez)

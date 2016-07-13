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
* Visit http://localhost:3000/ on your browser for the landing page
```


## Front-End
Pinwall's client side is built using React, Redux, and Bootstrap. 

### Client Application Information

```
client
├── actions
│   ├── current-note-action.js
│   └── retrieve-notes-action.js
│
├── assets
│   ├── css
│   ├── images
│   └── js
│   
├── components
│   ├── landing-page.js
│   ├── login.js
│   ├── navbar.js
│   ├── note-preview.js
│   ├── note.js
│   ├── signup.js
│   └── wall.js
│   
├── config
│   └── routes.js
│  
├── reducers
│   ├── current-note-reducer.js
│   ├── notes-reducer.js
│   ├── root-reducer.js
│   └── user-reducer.js
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

### Notes API

#### api/organizations/:orgId/notes GET

Expected   ****call path from clientside when you would like all notes from that organizations’ id  

Returns an array of notes as objects

```
[
  {
    "id": 1,
    "title": "Etiam At Risus Et",
    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",
    "createdAt": "2016-07-08T19:01:45.494Z",
    "updatedAt": "2016-07-08T19:01:45.494Z",
    "img": "http://poemiddle.gif",
    "organizationId": 1,
     “userId": 1
  },
  {
    "id": 2,
    "title": "The 2nd Etiam At Risus Et",
    "content": " Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu.",
    "createdAt": "2016-07-08T19:07:57.796Z",
    "updatedAt": "2016-07-08T19:07:57.796Z",
    "img": "http://poemiddle.gif",
    "organizationId": 1,
     “userId": 1
  }
]

```


## The Pinwall Team
* [Stephanie Velazquez](https://github.com/stephvelazquez)
* [Chadd Bennett](https://github.com/chaddbennett)
* [Joseph Capezzuto](https://github.com/Capezzuto)
* [Marco Berardini](https://github.com/carlbernardo)

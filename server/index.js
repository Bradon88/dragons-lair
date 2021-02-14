const express = require('express')
const session = require('express-session')
const massive = require('massive')
require('dotenv').config()
const authCtrl = './controllers/authController'

const port = 4000

app.listen(port, () => console.log(`On port ${port}`))

app.use(express.json())

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
  }).then(db => {
    app.set('db', db);
    console.log('db connected');
  });
  
  app.use(
    session({
      resave: true,
      saveUninitialized: false,
      secret: SESSION_SECRET,
    })
  );
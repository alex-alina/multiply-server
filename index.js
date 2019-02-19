const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
// const contactsRouter = require('./contacts/routes')
// require('./db'); => why?

const app = express();
const port = process.env.PORT || 4000;

app
  .use(cors())
  .use(bodyParser.json())
  // .use(contactsRouter)
  .listen(port);

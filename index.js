const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contacts = require('./contacts/router');
require('./db');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(contacts)
  .listen(port);

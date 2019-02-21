const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const contacts = require('./contacts/router');
require('./db');

const app = express();
const port = process.env.PORT || 4000;

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
const logger = morgan('combined', { stream: accessLogStream });

app
  .use(logger)
  .use(cors())
  .use(bodyParser.json())
  .use(contacts)
  .listen(port);

const express = require('express')
const bodyParser = require('body-parser')
const contactsRouter = require('./contacts/routes')

const app = express();
const port = process.env.PORT || 4000

app
// .use(cors())
.use(bodyParser.json())
.use(contactsRouter)
.listen(port, () => console.log(`Listening on port ${port}`))

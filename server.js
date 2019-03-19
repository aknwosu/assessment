import express from 'express'
import logger from 'morgan';
const path = require('path')
const routes = require('./routes');
require('dotenv').config();
// const pid = process.pid;

const app = express()

app.use(logger('dev'));

// Parse incoming requests data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app)

app.get('/api/v1', (req, res) => {
  res.send(`Handled by process ${pid}`)
})

const { PORT } = process.env;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
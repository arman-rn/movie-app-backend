const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const { memberRoutes } = require('../routes');

const { morgan, auth } = require('./middleware');

const app = express();
app.use(helmet());
// body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow cross-origin
app.use(cors());

// app.use(auth)
app.use(morgan);

app.use('/movie', memberRoutes.movie);
app.use('/tv', memberRoutes.series);
app.use('/comments', memberRoutes.comment);

app.get('/', (req, res) => {
  res.status(403).json({
    status: 403,
    isAuth: req.isAuth,
    message: 'No token provided',
  });
});

module.exports = app;

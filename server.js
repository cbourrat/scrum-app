// Get dependencies
const express = require('express');
var mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Get our API routes
const index = require('./server/routes/index');
const apiRouter = require('./server/routes/api');

// Mongoose
var DB = "mongodb://localhost:27017/scrumappdb";

const app = express();

// Parsers for POST data (middle ware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function(req,res,next)  {
    res.header('Access-COntrol-Allow-Origin', '*');
    res.header('Access-COntrol-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-COntrol-Allow-Headers', 'Content-Type');
    next();
});

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
//app.use('/quete', quete);
app.use('/', index);
app.use('/api', apiRouter);

// Connection to mongoose
mongoose.connect(DB, (err) => {
    if (err) {
        return err;
    } else {
        console.log('Successfully connected to ' + DB);
    }
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
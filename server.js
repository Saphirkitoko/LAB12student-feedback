// Import required modules
const express = require('express'); // Import Express framework
const path = require('path'); // Utility for working with file and directory paths
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies

// Import routes from the index.js file
const indexRouter = require('./routes/index');

// Create Express application
const app = express();

// Enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files, such as CSS, from the 'public' directory
const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

// Configure Express to use the Handlebars template engine and
// work with template files in the 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Make the routes defined in index.js available to the application
app.use('/', indexRouter);

// Start the server
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port);
});

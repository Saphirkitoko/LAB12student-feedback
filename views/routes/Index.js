const express = require('express');
const router = express.Router();

// Route for rendering the index page with dynamic data
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Feedback app', author: 'Clara'});
});

// Route for rendering the feedback form page
router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form');
});

// Route for handling form submission and rendering a thank you page
router.post('/submit-feedback', function(req, res, next){
    // Get the form data from the request body
    const formData = req.body;

    // Render a thank you page with submitted data
    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['current-student']
    });
});

module.exports = router;

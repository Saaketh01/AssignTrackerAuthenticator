let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// Connect with assignment model
let Assignment = require('../models/assignment');
//Controller for assignment 
let AssignmentController = require('../controllers/assignment')
// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* Get route for Assignment Tracker list */
// Read Operation
router.get('/', AssignmentController.DisplayAssignmentList);
/* Get route for Add Book page --> Create */
router.get('/add',requireAuth, AssignmentController.AddAssignment); 
/* Post route for Add Book page --> Create */
router.post('/add',requireAuth, AssignmentController.ProcessAssignment);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id',requireAuth, AssignmentController.EditAssignment);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id',requireAuth, AssignmentController.ProcessEditAssignment);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id',requireAuth, AssignmentController.DeleteAssignment);

module.exports = router;
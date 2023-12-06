let mongoose = require('mongoose');
//create a assignment model along with schema
let assignmentModel = mongoose.Schema({
    CourseName:String,
    AssignmentName:String,
    Duedate: String,
    Status: String,
},

{
    collection:"assignments"
}

);

module.exports = mongoose.model('assign',assignmentModel);

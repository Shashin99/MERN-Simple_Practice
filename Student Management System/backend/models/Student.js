const mongoose = require('mongoose'); // to connect with mongo db 

const Schema = mongoose.Schema; // create class 

const studentSchema = new Schema({ // create object 
    // attributes insert inside the object
    name : {      // attribute - (properties)
        type: String,
        required: true // backend validation - required   ( connect with routes)
    },

    age : {
        type: Number,
        required: true
    },

    gender : {
        type: String,
        required: true
    },

})

const Student = mongoose.model("Student" , studentSchema) // mogoose.model ("table_name" ,schema_name)

module.exports = Student;     // must be exported 
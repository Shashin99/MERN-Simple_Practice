const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const studentSchema = new Schema({ 
  
    name : {    
        type: String,
        required: true 
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

module.exports = Student;  
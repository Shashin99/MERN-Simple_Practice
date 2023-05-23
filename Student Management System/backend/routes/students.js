const router = require("express").Router();
let Student = require("../models/Student");

// http://localhost:8070/student/add 
router.route("/add").post((req,res) => {  
    
    const name =  req.body.name; 
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({ 

        name,
        age,
        gender
    })

    // insert values to the database 
    newStudent.save().then(()=>{ 
        res.json("Student Added") 
    }).catch((err)=>{ 
        console.log(err); 
    })
})

// http://localhost:8070/Student
router.route("/").get((req,res) =>{

    Student.find().then((students)=>{ 
        res.json(students) // respone is the retriew students in the database as a json file
    }).catch((err)=>{
        console.log(err)
    })
})

// http//localhost:8070/student/update/(id) ----> update/id of the student 
router.route("/update/:id").put(async (req,res)=>{ // : must ----> :studentId
    let userId = req.params.id;
    const{name,age,gender} = req.body; //destructure method // updated  details

    const updateStudent = { // object create update student
        name,  
        age,
        gender,
    }

    const update  = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{   // check whether id has in the system ---> model  (user id,{ name, age , gender})
        res.status(200).send({status: "user update"})                   // or can send updated user({status: "user update", user: updated})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message}); // error
    })
})

// http//localhost:8070/student/delete/(id)
router.route("/delete/:id").delete(async(req,res)=> {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:" Error with delete user", error:err.message});
    })
})

// only get 1 student ----
router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    const user = await Student.findById(userId) // if use email ----> await Student.findOne(email)
    .then((student)=>{  // then((student) ---> 
        res.status(200).send({status:"User Fetched", student}); // ({status:"User Fetched", user:user}) ---> updated user frontend ekata yawanna
    }).catch(()=>{
        res.status(500).send({status:" Error with get user ", error:err.message}); //status --> not a key word
    })
})

module.exports = router;
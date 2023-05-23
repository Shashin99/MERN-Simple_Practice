import React, {useState}from "react";
import axios from "axios";

export default function AddStudent(){

    const [name,setName] = useState(""); // initializing values for the form 
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");


    function sentData(e){
        e.preventDefault();
        //  console.log("student added")
        const newStudent = {
            name,
            age,
            gender
        }


        // go to backend
        axios.post("http://localhost:8070/student/add/", newStudent).then(()=>{
            // console.log("student added")
            alert("Student Addeded")
            setName("");
            setAge("");
            setGender("");

        }).catch((err)=>{
            alert(err);
        })

        // console.log(newStudent); // can see the details in console
        // alert("Insert") // to get the verify when input the details
    }



    return(
        <div className="container">
           <form action="">
                <div className="mb-3">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name" onChange={(e)=>{   // onChange Function --- occuring this one continuously
                        setName(e.target.value)
                    }}/>
                    
                </div>
                <div className="mb-3">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"onChange={(e)=>{   
                        setAge(e.target.value)
                    }} />
                    
                </div>
                <div className="mb-3">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"onChange={(e)=>{   
                        setGender(e.target.value)
                    }} />
                    
                </div>
            
                <button type="submit" className="btn btn-primary" onClick={sentData}>Submit</button>
            </form> 

            
        </div>
    )
}
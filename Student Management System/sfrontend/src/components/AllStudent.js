import React,{ useState, useEffect } from 'react';
import axios from "axios";

export default function AllStudent(){

    const [students, setStudents] = useState([]); // using functional component

    useEffect(()=>{
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res)=> {
                // console.log(res.data);
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    
    return(
        <div className ="container">
            <h1> All Student </h1>
            <ul>
                {students.map((item)=>(
                    <li key={item._id}>name: {item.name}<br/>age: {item.age}<br/>gender: {item.age} <br/> 
                    <button type="submit" className="btn btn-primary btn-sm "> Update </button> 
                    <button type="submit" className="btn btn-danger btn-sm"> Delete </button></li>
                ))}
            </ul>
        </div>
    )
}

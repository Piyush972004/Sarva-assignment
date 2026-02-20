import axios from "axios";

import { useState,useEffect } from "react";

function TeacherSelector(){

const [teachers,setTeachers]=useState([]);

const [details,setDetails]=useState([]);

// ✅ ADD BELOW details state

const lessons = details.filter(
d => d.activity_type === "Lesson Plan"
).length;

const quizzes = details.filter(
d => d.activity_type === "Quiz"
).length;

const assessments = details.filter(
d => d.activity_type === "Assessment"
).length;


useEffect(()=>{

axios.get("http://localhost:5000/api/activity/summary")

.then(res=>setTeachers(res.data));

},[]);


const handleChange=(name)=>{

axios.get(

"http://localhost:5000/api/activity/teacher/"+name

)

.then(res=>setDetails(res.data));

};


return(

<div className="bg-white p-5 rounded-xl shadow">

<h2 className="font-bold mb-4">

Teacher Details

</h2>


<select

className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"

onChange={(e)=>handleChange(e.target.value)}

>

<option>Select Teacher</option>

{teachers.map((t,index)=>(

<option key={index}>

{t._id}

</option>


))}

</select>

{/* ✅ ADD THIS BELOW SELECT */}

{details.length > 0 && (

<div className="mt-4 mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border">

<h3 className="font-semibold mb-3 text-gray-800">

📊 Performance Summary

</h3>

<div className="grid grid-cols-2 gap-3">

<div className="bg-white p-2 rounded shadow-sm">

📘 Lessons  
<p className="font-bold text-blue-600">{lessons}</p>

</div>

<div className="bg-white p-2 rounded shadow-sm">

📝 Quizzes  
<p className="font-bold text-green-600">{quizzes}</p>

</div>

<div className="bg-white p-2 rounded shadow-sm">

📄 Assessments  
<p className="font-bold text-red-600">{assessments}</p>

</div>

<div className="bg-white p-2 rounded shadow-sm">

📊 Total  
<p className="font-bold text-gray-700">{details.length}</p>

</div>

</div>

</div>

)}

<div className="max-h-64 overflow-y-auto">

{details.map((d,index)=>(

<div
key={index}
className="flex items-center gap-2 bg-gray-50 p-3 rounded mb-2 border hover:bg-gray-100 transition"
>

<span>

{d.activity_type === "Quiz" && "📝"}

{d.activity_type === "Lesson Plan" && "📘"}

{d.activity_type === "Question Paper" && "📄"}

</span>

<span>

{d.activity_type} — {d.subject}

</span>

</div>

))}

</div>

</div>

);

}

export default TeacherSelector;
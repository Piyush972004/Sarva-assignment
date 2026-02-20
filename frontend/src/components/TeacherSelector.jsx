import axios from "axios";
import { useState,useEffect } from "react";
import { API } from "../config";   // ✅ use config file


function TeacherSelector(){

const [teachers,setTeachers]=useState([]);

const [details,setDetails]=useState([]);

const [loading,setLoading]=useState(false);

const [error,setError]=useState(false);


// ✅ calculate performance summary

const lessons =
details.filter(d =>
d.activity_type === "Lesson Plan").length;

const quizzes =
details.filter(d =>
d.activity_type === "Quiz").length;

const assessments =
details.filter(d =>
d.activity_type === "Assessment").length;



// ✅ get teacher list

useEffect(()=>{

axios.get(`${API}/summary`)

.then(res=>setTeachers(res.data))

.catch(err=>{

console.log(err);

setError(true);

});

},[]);



// ✅ get teacher details

const handleChange=(name)=>{

setLoading(true);

axios.get(`${API}/teacher/${name}`)

.then(res=>{

setDetails(res.data);

setLoading(false);

})

.catch(err=>{

console.log(err);

setError(true);

setLoading(false);

});

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




{/* Loading */}

{loading && (

<p className="mt-3 text-gray-500">

Loading teacher data...

</p>

)}



{/* Error */}

{error && (

<p className="mt-3 text-red-500">

Server waking up... please wait

</p>

)}




{/* Performance Summary */}

{details.length > 0 && (

<div className="mt-4 mb-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border">


<h3 className="font-semibold mb-3">

📊 Performance Summary

</h3>



<div className="grid grid-cols-2 gap-3">



<div className="bg-white p-2 rounded shadow-sm">

📘 Lessons

<p className="font-bold text-blue-600">

{lessons}

</p>

</div>



<div className="bg-white p-2 rounded shadow-sm">

📝 Quizzes

<p className="font-bold text-green-600">

{quizzes}

</p>

</div>



<div className="bg-white p-2 rounded shadow-sm">

📄 Assessments

<p className="font-bold text-red-600">

{assessments}

</p>

</div>



<div className="bg-white p-2 rounded shadow-sm">

📊 Total

<p className="font-bold text-gray-700">

{details.length}

</p>

</div>



</div>

</div>

)}



{/* Activity list */}

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
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SummaryCards(){

const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);

useEffect(()=>{

axios.get("https://savra-backend.onrender.com/api/activity/summary")

.then(res=>{

setData(res.data);
setLoading(false);

})

.catch(err=>{

console.log(err);
setError(true);
setLoading(false);

});

},[]);


if(loading)
return <p>Loading summary...</p>;

if(error)
return <p>Server waking up... please wait</p>;


return(

<div className="grid md:grid-cols-3 gap-4">

{data.map((teacher,index)=>(

<motion.div

key={index}

initial={{ opacity: 0, y: 20 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.4 }}

className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-indigo-500"

>

<h2 className="font-bold text-lg mb-2 text-gray-800">

{teacher._id}

</h2>

<p className="text-blue-600 font-medium">

📘 Lessons: {teacher.lessons}

</p>

<p className="text-green-600 font-medium">

📝 Quizzes: {teacher.quizzes}

</p>

<p className="text-red-500 font-medium">

📊 Assessments: {teacher.assessments}

</p>

</motion.div>

))}

</div>

);

}

export default SummaryCards;
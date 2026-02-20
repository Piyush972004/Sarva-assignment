import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

<motion.div

initial={{ opacity: 0, y: 20 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.4 }}

></motion.div>

function SummaryCards(){

const [data,setData]=useState([]);

useEffect(()=>{

axios.get("https://savra-backend.onrender.com/api/activity/summary")

.then(res=>setData(res.data));

},[]);


return(

<div className="grid md:grid-cols-3 gap-4">

{data.map((teacher,index)=>(

<div key={index}
    
className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-indigo-500">

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

</div>

))}

</div>

);

}

export default SummaryCards;
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../config";

function SummaryCards(){

const [data,setData]=useState([]);

const [loading,setLoading]=useState(true);

const [error,setError]=useState(false);



useEffect(()=>{

axios.get(`${API}/summary`)

.then(res=>{

// add total count
const sorted = res.data.map(t => ({

...t,

total:
t.lessons +
t.quizzes +
t.assessments

}))

.sort((a,b)=>
b.total - a.total
);

setData(sorted);

setLoading(false);

})

.catch(err=>{

console.log(err);

setError(true);

setLoading(false);

});

},[]);





// Loading UI

if(loading)

return(

<div className="bg-white p-5 rounded-xl shadow">

<p className="animate-pulse text-gray-500">

Loading teacher summary...

</p>

</div>

);




// Error UI

if(error)

return(

<div className="bg-red-50 p-5 rounded-xl shadow">

<p className="text-red-500">

Server waking up... please wait

</p>

</div>

);






return(

<div className="grid md:grid-cols-3 gap-4">


{data.map((teacher,index)=>(

<motion.div

key={index}

initial={{ opacity: 0, y: 20 }}

animate={{ opacity: 1, y: 0 }}

transition={{ duration: 0.4, delay:index*0.1 }}

className={`

bg-white p-5 rounded-xl shadow

hover:shadow-xl hover:scale-105

transition duration-300

border-l-4

${index===0

? "border-green-500 bg-green-50"

: "border-indigo-500"}

`}

>




{/* Ranking */}

<h3 className="text-sm text-gray-500">

#{index+1} Teacher

</h3>




{/* Name */}

<h2 className="font-bold text-lg mb-2 text-gray-800">

{teacher._id}

</h2>




{/* Stats */}

<p className="text-blue-600 font-medium">

📘 Lessons: {teacher.lessons}

</p>

<p className="text-green-600 font-medium">

📝 Quizzes: {teacher.quizzes}

</p>

<p className="text-red-500 font-medium">

📊 Assessments: {teacher.assessments}

</p>




{/* Total */}

<p className="mt-2 font-bold text-gray-700">

Total: {teacher.total}

</p>




{/* Top badge */}

{index===0 && (

<span className="inline-block mt-2 text-xs bg-green-500 text-white px-2 py-1 rounded">

🏆 Top Teacher

</span>

)}





</motion.div>

))}

</div>

);

}


export default SummaryCards;
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { API } from "../config";

function Insights(){

const [insight,setInsight]=useState(null);

const [loading,setLoading]=useState(true);

const [error,setError]=useState(false);



useEffect(()=>{

axios.get(`${API}/insights`)

.then(res=>{

setInsight(res.data);

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

🤖 Generating AI insights...

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

<motion.div

initial={{ opacity:0, y:20 }}

animate={{ opacity:1, y:0 }}

transition={{ duration:0.5 }}

className="

bg-gradient-to-r

from-indigo-500

via-purple-500

to-pink-500

text-white

p-6

rounded-xl

shadow-lg

mt-6

"

>




<h2 className="text-xl font-bold mb-3">

🤖 AI Insights

</h2>




<div className="space-y-2">




<p>

🏆 Top Teacher:

<span className="font-bold ml-2">

{insight.topTeacher._id}

</span>

</p>




<p>

⚠ Least Active:

<span className="font-bold ml-2">

{insight.leastTeacher._id}

</span>

</p>




<p className="text-sm opacity-90 mt-2">

📊 {insight.message}

</p>




</div>

</motion.div>

);

}


export default Insights;
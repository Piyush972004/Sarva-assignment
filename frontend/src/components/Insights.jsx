import axios from "axios";
import { useEffect, useState } from "react";

function Insights() {

const [insight, setInsight] = useState(null);

useEffect(() => {

axios.get("http://localhost:5000/api/activity/insights")

.then(res => setInsight(res.data));

}, []);

if (!insight) return <p>Loading insights...</p>;

return (

<div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg mt-6">

<h2 className="text-xl font-bold mb-2">

🤖 AI Insights

</h2>

<p>

🏆 Top Teacher: {insight.topTeacher._id}

</p>

<p>

⚠ Least Active: {insight.leastTeacher._id}

</p>

</div>

);

}

export default Insights;
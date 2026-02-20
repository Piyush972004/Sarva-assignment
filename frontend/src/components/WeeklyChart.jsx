import axios from "axios";
import { useEffect,useState } from "react";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend,

} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);

function WeeklyChart(){

const [data,setData]=useState([]);

useEffect(()=>{

axios.get("https://savra-backend.onrender.com/api/activity/weekly")

.then(res=>setData(res.data));

},[]);


const chartData={

labels:data.map(item=>"Week "+item._id.week),

datasets:[{

label:"Activities",

data:data.map(item=>item.count),

backgroundColor:"blue"

}]

};


return(

<div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
<h2 className="text-lg font-bold text-gray-700 mb-4">
📈 Weekly Activity
</h2>

<Bar data={chartData}/>

</div>

);

}

export default WeeklyChart;
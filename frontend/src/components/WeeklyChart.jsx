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

import { API } from "../config";   // ✅ use config


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

const [loading,setLoading]=useState(true);

const [error,setError]=useState(false);



// Fetch data

useEffect(()=>{

axios.get(`${API}/weekly`)

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



// Chart data

const chartData={

labels:data.map(item =>
`Week ${item._id.week}`
),

datasets:[{

label:"Activities",

data:data.map(item =>
item.count
),

backgroundColor:

"rgba(99,102,241,0.7)",

borderRadius:8,

hoverBackgroundColor:

"rgba(99,102,241,1)",

}]

};



// Chart options

const options={

responsive:true,

plugins:{

legend:{
display:true,
position:"top"
},

title:{
display:false
}

},

scales:{

y:{
beginAtZero:true,
ticks:{
stepSize:1
}
}

}

};




return(

<div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">



<h2 className="text-lg font-bold text-gray-700 mb-4">

📈 Weekly Activity

</h2>




{/* Loading */}

{loading && (

<p className="text-gray-500">

Loading chart...

</p>

)}




{/* Error */}

{error && (

<p className="text-red-500">

Server waking up... please wait

</p>

)}




{/* Chart */}

{!loading && !error && (

<Bar
data={chartData}
options={options}
/>

)}



</div>

);

}


export default WeeklyChart;
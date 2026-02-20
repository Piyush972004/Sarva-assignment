import SummaryCards from "./SummaryCards";
import WeeklyChart from "./WeeklyChart";
import TeacherSelector from "./TeacherSelector";
import Insights from "./Insights";
import Navbar from "./Navbar";

function Dashboard(){

return(
<div className="min-h-screen">

<Navbar/>

<div className="p-6">

<SummaryCards/>

<Insights/>

<div className="grid md:grid-cols-2 gap-6 mt-6">

<WeeklyChart/>

<TeacherSelector/>

</div>

</div>

</div>

);

}

export default Dashboard;
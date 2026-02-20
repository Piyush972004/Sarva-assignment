const Activity = require("../models/Activity");

exports.getSummary = async(req,res)=>{

const summary = await Activity.aggregate([

{
$group:{
_id:"$teacher_name",
count:{$sum:1}
}
}

]);

res.json(summary);

};
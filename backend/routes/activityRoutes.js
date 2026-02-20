const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");


// API 1: Get total lessons, quizzes, assessments per teacher

router.get("/summary", async (req, res) => {

try {

const summary = await Activity.aggregate([

{
$group: {

_id: "$teacher_name",

lessons: {

$sum: {

$cond: [{ $eq: ["$activity_type", "Lesson Plan"] }, 1, 0]

}
},

quizzes: {

$sum: {

$cond: [{ $eq: ["$activity_type", "Quiz"] }, 1, 0]

}
},

assessments: {

$sum: {

$cond: [{ $eq: ["$activity_type", "Assessment"] }, 1, 0]

}
}

}

}

]);

res.json(summary);

} catch(error){

res.status(500).json(error);

}

});



// API 2: Weekly activity trends

router.get("/weekly", async (req, res) => {

try {

const weekly = await Activity.aggregate([

{

$group: {

_id: {

week: { $week: "$created_at" },

year: { $year: "$created_at" }

},

count: { $sum: 1 }

}

},

{

$sort: { "_id.year": 1, "_id.week": 1 }

}

]);

res.json(weekly);

} catch(error){

res.status(500).json(error);

}

});



// API 3: Per teacher detailed analysis

router.get("/teacher/:name", async (req, res) => {

try {

const teacher = await Activity.find({

teacher_name: req.params.name

});

res.json(teacher);

} catch(error){

res.status(500).json(error);

}

});


module.exports = router;


// Filter activities

router.get("/filter", async (req,res)=>{

try{

const query={};

if(req.query.teacher)
query.teacher_name=req.query.teacher;

if(req.query.subject)
query.subject=req.query.subject;

if(req.query.class)
query.class=req.query.class;

const result=await Activity.find(query);

res.json(result);

}
catch(error){

res.status(500).json(error);

}

});


// Get insights
router.get("/insights", async (req, res) => {

try {

// total activities per teacher

const teacherStats = await Activity.aggregate([

{
$group: {
_id: "$teacher_name",
count: { $sum: 1 }
}
},

{
$sort: { count: -1 }
}

]);

// most active teacher

const topTeacher = teacherStats[0];

// least active teacher

const leastTeacher = teacherStats[teacherStats.length - 1];

res.json({

topTeacher: topTeacher,

leastTeacher: leastTeacher,

message: `Top teacher is ${topTeacher._id} with ${topTeacher.count} activities`

});

}

catch (error) {

res.status(500).json(error);

}

});

// AI Insight

router.get("/insight", async (req,res)=>{

try{

const insight = await Activity.aggregate([

{
$group:{
_id:"$teacher_name",
count:{$sum:1}
}
},

{
$sort:{count:-1}
},

{
$limit:1
}

]);

res.json({

message:`Top active teacher is ${insight[0]._id} with ${insight[0].count} activities`

});

}
catch(error){

res.status(500).json(error);

}

});


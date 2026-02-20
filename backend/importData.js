const mongoose = require("mongoose");
const XLSX = require("xlsx");
const Activity = require("./models/Activity");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected for import"));

const workbook = XLSX.readFile("Savra_Teacher Data Set.xlsx");

const sheet = workbook.Sheets[workbook.SheetNames[0]];

const rawData = XLSX.utils.sheet_to_json(sheet);

// FIX: map excel fields to model fields

const data = rawData.map(item => ({

teacher_id: item.Teacher_id,

teacher_name: item.Teacher_name,

activity_type: item.Activity_type,

subject: item.Subject,

class: item.Grade,

created_at: item.Created_at

}));


const importData = async () => {

try {

await Activity.deleteMany();

await Activity.insertMany(data);

console.log("Data Imported Successfully");

process.exit();

} catch(error) {

console.log(error);

process.exit();

}

};

importData();
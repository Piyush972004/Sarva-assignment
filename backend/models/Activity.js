const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({

teacher_id: {
type: String,
required: true
},

teacher_name: {
type: String,
required: true
},

activity_type: {
type: String,
required: true
},

subject: {
type: String,
required: true
},

class: {
type: String,
required: true
},

created_at: {
type: Date,
required: true
}

}, {
timestamps: true
});


// ✅ THIS LINE PREVENTS DUPLICATES

activitySchema.index(
{ teacher_id: 1, activity_type: 1, created_at: 1 },
{ unique: true }
);

module.exports = mongoose.model("Activity", activitySchema);
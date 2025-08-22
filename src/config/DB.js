const mongoose = require('mongoose');
async function main() {
    await mongoose.connect(`mongodb+srv://Jitu_Saini:Jitu_Saini@codingadda.ff0jvye.mongodb.net/StudentFeedBack`)
}
module.exports = main;
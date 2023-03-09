const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const db = async() => {
    try {
        mongoose.connect(process.env.dburl);
        console.log("DB Connection established successfully!!!")   
    } catch (error) {
        console.log("DB Error", error)
    }
    
}


module.exports= db
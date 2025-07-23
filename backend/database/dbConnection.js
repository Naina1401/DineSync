import mongoose from "mongoose";

export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant_Application",
    })
    .then(()=>{
        console.log("CONNECTED TO DATABASE SUCCESSFULLY!!");
    }).catch(err =>{
        console.log(`Some Error occured while connecting to database! ${err}`);
    });
};


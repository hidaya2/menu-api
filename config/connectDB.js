const mongoose =require ("mongoose")

const connectDB =async()=>{
    await mongoose.connect(process.env.DB_URL,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    })
    console.log("database connected")
}

module.exports=connectDB;

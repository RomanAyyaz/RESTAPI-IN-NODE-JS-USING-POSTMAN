const mongoose = require ("mongoose");
const uri = "mongodb+srv://romanayaz7:registration2@cluster0.cldk4ht.mongodb.net/user-api?retryWrites=true&w=majority";
mongoose.connect(uri,{
}).then(()=>{
    console.log("connect to database")
}).catch((err)=>{
    console.log(err)
})
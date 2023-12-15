const express = require("express");
const app= express();
const port = process.env.PORT || 3000;
const User = require('./models/user')
require("./db/conn")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello jee")
})
//POST method : Sending data 
app.post("/users", async (req,res)=>{
    try {
        const user = new User(req.body);
        const createUser=await user.save();
        console.log(createUser)
        res.status(201).send(createUser)   
    } 
    catch (error) {
        res.status(400).send(error)
    }
})
//GET method: Getting user data
app.get("/users",async(req,res)=>{
    try {
        const data = await User.find();
        res.send(data)
    } catch (error) {
        res.status(400),send(error)
    }
})
//PATCH method : Updating one value
app.patch("/users/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const data= await User.findByIdAndUpdate(id,req.body,{
            new : true
        })
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
})
//DELETE method: Deleting data 
app.delete("/users/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const data= await User.findByIdAndDelete(id)
        if(!data){
            res.status(404).send()
        }
        res.send(data);
    } catch (error) {
        res.status(404).send(error)
    }
})
app.listen(port,()=>{
    console.log(`listening at port number ${port}`)
})
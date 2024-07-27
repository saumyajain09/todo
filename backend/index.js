const express = require('express');
const { createToDo, updateTodo } = require('./type');
const { ZodParsedType } = require('zod');
const app = express()

app.use(express.json())

app.post("/todo",function(req,res){
    
    const createPayLoad = req.body;
    const ParsedPayload = createToDo.safeParse(createPayLoad);
    if(!ParsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return;
    }
    //put in mongoDB



})

app.get("/todos",function(req,res){

})
//this end point does't need any validation

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const ParsedPayload=updateTodo.safeParse(updatePayload)
    if(!ParsedPayload.success){
        req.status(411).json({
            msg:"you have send wrong input",
        })
        return;
    }
    
})
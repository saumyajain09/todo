const express = require('express');
const { createToDo, updateTodo } = require('./type');
const { ZodParsedType } = require('zod');
const app = express()

app.use(express.json())

app.post("/todo", async function(req,res){
    
    const createPayLoad = req.body;
    const ParsedPayload = createToDo.safeParse(createPayLoad);
    if(!ParsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs",
        })
        return;
    }
    //put in mongoDB
    await todo.create({
        title: createPayLoad.title,
        description:createPayLoad.description
        completed: false 

    })

    res.json({
        msg:"Todo Created"
    })



})

app.get("/todos", async function(req,res){          //here we are accessing the todos , inde the tot.find function we can also specify some todos

    const todos = await todo.find();
    console.log(todos) //promises

    //end point 
    res.json({
        todos
    })

})
//this end point does't need any validation

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const ParsedPayload=updateTodo.safeParse(updatePayload)
    if(!ParsedPayload.success){
        req.status(411).json({
            msg:"you have send wrong input",
        })
        return;
    }
    
})

await todo.update({
    _id:req.body.id },
    {completed:true

        
})

res.json({
    msg:"todo has been completed"
})
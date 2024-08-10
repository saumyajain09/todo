/* 
todo:
title : string
description: string
completed : boolean
*/

const mongoose = require("mongoose");
const { string, boolean } = require("zod");
//have your mongodb url handy 

// create the schema
mongoose.connect("mongodb+srv://saumyajain09:*****@cluster0.c4kmxzv.mongodb.net")
const todoSchema = mongoose.Schema({
//in a professional project put it .env folder

    title : string,
    description: string,
    completed: boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todos
}
const zod= require("zod")
/*
done for checking the validation 
check whether the send input is correct or not 

{
title : string 
description : string
}

{
id: string 
}

*/

const createToDo = zod.object({
    title: zod.string(),
    description:zod.string()


})

const updateTodo = zod.object({
    id:zod.string()
})

//we have created this zod file hence further needs to be integrated in the main file i.e index.js

//following is the technique to connect this file 

module.exports = {
    createToDo: createToDo,
    updateTodo: updateTodo
}

//new zod type has been created 
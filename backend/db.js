// /*
// todo:
// title : string
// description: string
// completed : boolean
// */

// const mongoose = require("mongoose");
// // const { string, boolean } = require("zod");
// //have your mongodb url handy

// // create the schema
// mongoose.connect("mongodb+srv://saumyajain09:*****@cluster0.c4kmxzv.mongodb.net")
// const todoSchema = mongoose.Schema({
// //in a professional project put it .env folder

//     title :String,
//     description: String,
//     completed: Boolean
// })

// const todo = mongoose.model('todos',todoSchema)

// module.exports = {
//     todo
// }
// const mongoose = require("mongoose") 
// //mongodb+srv://saumyajain09:b126b126@cluster0.c4kmxzv.mongodb.net/todos

// // mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// // .env
// connect("kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos");
// const todoSchema = Schema({
//   title: String,
//   description: String,
//   completed: Boolean,
// });

// const todo = model("todos", todoSchema);

// module.exports = {
//     todo
// }
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Connection string should be properly formatted and used in `mongoose.connect`  
const connectionString = "mongodb+srv://saumyajain09:b126b126@cluster0.c4kmxzv.mongodb.net/todoDB";
mongoose.connect(connectionString,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define schema
const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// Create model
const Todo = model('Todo', todoSchema);

// Export model
module.exports = {
  Todo,
};

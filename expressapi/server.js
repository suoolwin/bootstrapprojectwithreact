const express = require('express');
const cors = require('cors'); // Cross-Origin Resource Sharing
const {v4:uuidv4} = require('uuid');
const bodyParser = require('body-parser'); // Express Middleware
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());




let todos = [
    // {id:1,title:"Have to go",completed:false},
    // {id:2,title:"Have to eat",completed:false},
    // {id:3,title:"Have to shop",completed:false},
    // {id:4,title:"Have to cook",completed:true},
    // {id:5,title:"Have to visit",completed:true},
];

// All Todos 
// http://localhost:5000/api/todos
app.get("/api/todos",(req,res)=>{
    res.json(todos);
});


// Add New Todo 
app.post("/api/todos",(req,res)=>{

    const {title} = req.body;

    const newtodo = {id:uuidv4(),title,completed:false}
    todos.push(newtodo);
    res.status(200).json(newtodo);
    
});


// Update Todo
app.put("/api/todos/:id",(req,res)=>{
    const {id} = req.params;
    const {title,completed} = req.body;
    todos = todos.map(todo => todo.id == id ? { ...todo , title, completed} : todo);
    res.json({id,title,completed});
    
});

// Delete Todo 
app.delete("/api/todos/:id",(req,res)=>{

    // const {id} = req.params;

    // const todo = todos.find(todo => todo.id == id);

    // if(!todo){
    //     return res.status(404).json({message:"data not found"});
    // }

    // todos = todos.filter(todo => todo.id != id );
    // res.status(204).send();  // successfully processed the request 

    // const {id} = req.params;

    // const todoindex = todos.findIndex(todo => todo.id == id);

    // if(todoindex == -1){
    //     return res.status(404).json({message:"data not found"});
    // }

    // todos.splice(todoindex,1);
    // // res.status(204).send();  // successfully processed the request 
    // res.status(200).json({id});


    try{
    const {id} = req.params;

        const todoindex = todos.findIndex(todo => todo.id == id);

        if(todoindex == -1){
            return res.status(404).json({message:"data not found"});
        }

        todos.splice(todoindex,1);
        // res.status(204).send();  // successfully processed the request 
        res.status(200).json({id});
    }catch(err){
        console.log('Error ',err)
    }

});



app.listen(PORT,()=>{
    console.log(`Express Server is running`)
})
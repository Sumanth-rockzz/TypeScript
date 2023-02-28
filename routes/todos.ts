import{Router}from 'express';

import {Todo} from '../models/todo';

let todos:Todo[]=[];

const router=Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    };
     todos.push(newTodo);
    res.status(200).json({todo:todos});
})
router.put('/todo/:todoid',(req,res,next)=>{

    const id=req.params.todoid;
    const todoindex=todos.findIndex(todo=>todo.id===id);
    console.log(todoindex);
    if(todoindex>=0){
        todos[todoindex]={
            id:todos[todoindex].id,
            text:req.body.text
        }
        return res.status(200).json({message:"Updated",todos:todos})
    }
    res.status(404).json({message:"not found"})

})
router.delete('/todo/:todoid',(req,res,next)=>{

    const id=req.params.todoid;
   const  oldlength= todos.length;
   todos=todos.filter(todo=>todo.id!==id);
    if(todos.length<oldlength){
        return res.status(200).json({message:"deleted",todos:todos})
    }
    res.status(404).json({message:"id not found cannot delete"})
   })



export default router;
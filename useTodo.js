import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"



const initialState = [ ]

const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [] 
    
}



export const useTodo = () =>{

    const [todo, dispatchTodo] = useReducer(todoReducer,initialState,init)
   
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todo))
    }, [todo])
 
    const onNewTodo = (value) =>{
        const action ={
            type: 'ADD_TODO',
            payload: value
        }
        dispatchTodo(action)
         }

    const onRemoveTodo = (id)=>{
        const action ={
            type: 'REMOVE_TODO',
            payload: id
            
        }
        dispatchTodo(action)
     }


    const onToggleTodo = (id) => {
   
        const action ={
            type: 'TOGGLE_TODO',
            payload: id
            
        }
    
        dispatchTodo(action)
     }
     return {
        todo,
        todoCount:todo.length,
        todoPending:todo.filter(todo=>todo.done==false).length,
        onNewTodo,
        onRemoveTodo,
        onToggleTodo

     }
}
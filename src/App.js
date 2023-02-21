import React, { useState, useEffect } from 'react'
import './App.css'
import TodoCard from './Components/TodoCard/TodoCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import data from './Utils/DataSet';

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTitle, setNewTitle] = useState('')

  useEffect(()=>{
    let data = localStorage.getItem("data")
    if(data){
      setTodos(JSON.parse(data))
    }
},[])

const addHandler =()=>{
  let newTodo = {  //making a new todo object
    id: Math.random(),
    title: newTitle,
    isCompleted: false,
    isDeleted: false
}

  todos.push(newTodo)
  setTodos([...todos])

  localStorage.setItem("data",JSON.stringify(todos))
}

const completeHandler = (id) => {
  // console.log(id)
  // let temp = todos 

  // temp.map((e)=>{
  //   if(e.id === id){
      
  //     e.isCompleted = true
  //   }
  // })
  // console.log(temp)
  const todo = todos.find(e => e.id === id); 
  todo.isCompleted = true
  setTodos([...todos])
  localStorage.setItem("data",JSON.stringify(todos))
}

const deleteHandler = (id) => {
  // console.log(id)
  // let temp = todos 

  // temp.map((e)=>{
  //   if(e.id === id){
      
  //     e.isDeleted = true
  //   }
  // })
  // console.log(temp)
  const todo = todos.find(e => e.id === id); // finds the element with id 
  todo.isDeleted = true
  setTodos([...todos])
  localStorage.setItem("data",JSON.stringify(todos))
}

  console.log(todos);
  return (
    <div className='main-container'>
      <div className='input-container'>
        <Box

          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" 
          label="Add A ToDo" 
          placeholder='Add A List Items...' 
          variant="outlined"
          onChange={(data)=>setNewTitle(data.target.value)} />
        </Box>
        <Button variant="outlined" onClick={addHandler}>Add</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4>Pending</h4>
          <div className='card-list'>
          {
              todos?.map((e) => {
                if(!e.isCompleted) {
                  return(
                  <div>
                    {!e.isDeleted && 
                     <TodoCard key={e.id} title={e.title} id= {e.id} complete={completeHandler} isCompleted={e.isCompleted} delete= {deleteHandler}/>}
                     </div>
                     )
                } else {
                  return <></>
                }
              })
            }


            {/* {
              todos.map((e) => {
                if(!e.isCompleted){
                return <TodoCard key={e.id} title={e.title}  id ={e.id} complete ={completeHandler} delete ={deleteHandler} />}
              })
            } */}
          </div>
        </div>
        <div className='card-container'>
          <h4>Completed</h4>
          <div className='card-list'>
          {
              todos?.map((e) => {
                if(e.isCompleted) {
                  return (!e.isDeleted && <TodoCard key={e.id} id={e.id} title={e.title} isCompleted={e.isCompleted} delete={deleteHandler}/>)
                } else {
                  <></>
                }
              })
            }


          {/* {
              todos.map((e) => {
                if(e.isCompleted){
                return <TodoCard key={e.id} title={e.title} />}
              })
          } */}
          </div>
        </div>
      </div>
    </div>

















    
    // <div className='todo'>
    //   <Todo />
    // </div>


    // // <div className='main-container'>
    // //   <div className='input-container'>
    // //     <input placeholder='write new todo' name='todo' type='text' />
    // //     <button>Add</button>
    // //   </div>
    // //   <div className='card-container'/>
    // //   <div>Card Container</div>
    // // </div>
  )
}

export default App
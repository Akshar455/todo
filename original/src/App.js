import React, { useState } from 'react'
import './App.css'
import TodoCard from './Components/TodoCard/TodoCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import data from './Utils/DataSet';

const App = (props) => {
  const [todos, setTodos] = useState(data)

// const clickHandler = (e) => {
//   const addTodo = {setTodo}
//   setTodo('')
//   props.clickHandler(addTodo);
// }

const completeHandler = (id) => {
  // console.log(id)
  let temp = todos 

  temp.map((e)=>{
    if(e.id === id){
      
      e.isCompleted = true
    }
  })
  // console.log(temp)
  setTodos([...todos])
}

const deleteHandler = (id) => {
  // console.log(id)
  let temp = todos 

  temp.map((e)=>{
    if(e.id === id){
      
      e.isDeleted = true
    }
  })
  // console.log(temp)
  setTodos([...todos])
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
          <TextField id="outlined-basic" label="Add A ToDo" placeholder='Add A List Items...' variant="outlined" />
        </Box>
        <Button variant="outlined">Add</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4>Pending</h4>
          <div className='card-list'>
          {
              todos.map((e) => {
                if(!e.isCompleted) {
                  return(
                  <div>
                    {!e.isDeleted && 
                     <TodoCard key={e.id} title={e.title} id= {e.id} complete={completeHandler} delete= {deleteHandler}/>}
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
              todos.map((e) => {
                if(e.isCompleted) {
                   return <TodoCard key={e.id} title={e.title} delete ={deleteHandler} />
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
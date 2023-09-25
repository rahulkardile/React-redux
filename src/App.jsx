import { useState } from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Hello Redux</h1>
      <AddTodos />
      <Todos />
      
    </>
  )
}

export default App

import { useState,  } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {

    const [input, setInput ] = useState('');
    const dispatch = useDispatch();

    const addTodoHandle = (e) => {
        e.preventDefault()
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <form onSubmit={addTodoHandle}>
    <input action=""
    type="text"
    placeholder='Enter a Todo . . .'
    value={input}
    onChange={(e)=> setInput(e.target.value)} />
    
    <button type='submit' onClick={addTodoHandle}>Submit</button>

    </form>
  )
}

export default AddTodos
import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div>Todos</div>
        {
        todos.map((todo) => (
            <div>
                <li key={todo.id}>{todo.text}
                </li>
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </div>

        ))
    }
    )
}

export default Todos
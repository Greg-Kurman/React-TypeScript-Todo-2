
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState, useEffect, useRef } from 'react'
import { ITodo } from '../types/data'
import { TodoList } from './List';

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null)

    const HangleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const HangleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            AddTodo()
        }
    }


    const AddTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('')
        }
    }

    const RemoveTodo = (id: number): void => {
            setTodos(todos.filter(todo => todo.id !==id))
    }

    const ToggleTodo = (id: number): void =>{
        setTodos(todos.map(todo=>{
            if (todo.id !== id) {
                return todo
            }
            return {
                ...todo,
                complete: !todo.complete
            }
        }))

    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])


    return (
        <div>
            <div>
                <input value={value} onChange={HangleChange} onKeyDown={HangleKeyDown} type="text" ref={inputRef} />
                <button onClick={AddTodo}>Добавить</button>
            </div>
            <TodoList items={todos} RemoveTodo={RemoveTodo} ToggleTodo={ToggleTodo} />
        </div>
    )
}

export { App }
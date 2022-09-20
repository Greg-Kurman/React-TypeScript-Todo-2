import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
        RemoveTodo: (id: number) => void;
        ToggleTodo: (id: number) => void;
}



const TodoItem: React.FC<ITodoItem> = (props) => {

        const { id, title, complete, RemoveTodo, ToggleTodo } = props

        return <div>
                <input type="checkbox" checked={complete} onChange={() => ToggleTodo(id)} />
                <span
                        style={{
                                display: 'inline-block',
                               margin: '0 10px',
                               
                        }}
                >{title}</span>
                <button

                        style={{
                                background: "transparent",
                                border: 'none',
                                outline: 'none',
                                color: 'red'
                        }}
                        onClick={() => RemoveTodo(id)}

                >Удалить</button>
        </div>
}

export { TodoItem }
import { TodoItem } from './Item'

import { ITodo } from '../types/data'

interface ITodoListProps {
    items: ITodo[];
    ToggleTodo: (id: number) => void;
    RemoveTodo: (id: number) => void;
}


const TodoList: React.FC<ITodoListProps> = (props) => {
    const { items, ToggleTodo, RemoveTodo,   } = props

    return <div>
        {
            items.map(e => (
                <TodoItem
                
                    key={e.id}
                    ToggleTodo={ToggleTodo}
                    RemoveTodo={RemoveTodo}
                    {...e}
                />
            ))
        }

    </div>
}

export { TodoList }
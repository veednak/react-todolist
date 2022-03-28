import{TodoItem} from '../components/TodoItem'
import { ItoDo } from '../types/data'

interface ITodoListProps{
    items:ItoDo[];
    toggleTodo(id:number,title:string):void;
    removeTodo(id:number):void;
}

const TodoList: React.FC<ITodoListProps> = (props)=>
{
    const{items, toggleTodo, removeTodo}=props;
    return <div>
        {
            items.map(todo=>
            <TodoItem 
                key={todo.id} 
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                {...todo}
            />)
        }
    </div>
}
export{TodoList}
import {ItoDo} from '../types/data'

interface ItoDoItem extends ItoDo{
    removeTodo:(id:number)=>void;
    toggleTodo:(id:number,title:string)=>void;

}

const TodoItem: React.FC<ItoDoItem> = (props)=>
{
    const {id, title, complete, removeTodo, toggleTodo} = props;
    return <div>
        <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id,title)}/>
        {title}
        <button onClick={()=> removeTodo(id)}>x</button>
    </div>
}
export {TodoItem}
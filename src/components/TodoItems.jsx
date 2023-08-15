import { Link } from "react-router-dom"

const TodoItems = ({id , title, deleteTodo}) => {

  console.log(id)
  return (
    <div className="todos">
        <div className="items">
          <div className="todo-text">{title} {id}</div>
          <div className="todo-buttons">
            <Link to={`/edit/${id}`}><button>Edit</button></Link>
            <button onClick={()=>deleteTodo(id)} id="delete">Delete</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItems
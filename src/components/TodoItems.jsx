import { Link } from "react-router-dom"

const TodoItems = ({id , title, deleteTodo, loading}) => {

  console.log(id)
  return (
    <div className="todos">
        <div className="items">
          <div className="todo-text">{title}</div>
          <div className="todo-buttons">
            <Link to={`/edit/${id}`}><button>Edit</button></Link>
            <button onClick={()=>deleteTodo(id)} disabled={loading} id="delete">Delete</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItems
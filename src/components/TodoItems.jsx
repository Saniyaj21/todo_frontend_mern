import { Link } from "react-router-dom"

const TodoItems = ({id , title}) => {
  return (
    <div className="todos">
        <div className="items">
          <div className="todo-text">{title}...</div>
          <div className="todo-buttons">
            <Link to={`/edit/${id}`}><button>Edit</button></Link>
            <button id="delete">Delete</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItems
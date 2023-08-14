import { Link } from "react-router-dom"

const TodoItems = ({_id , title, deleteTodo}) => {

  console.log(_id)
  return (
    <div className="todos">
        <div className="items">
          <div className="todo-text">{title} {_id}...</div>
          <div className="todo-buttons">
            <Link to={`/edit/${_id}`}><button>Edit</button></Link>
            <button onClick={()=>deleteTodo(_id)} id="delete">Delete</button>
          </div>
        </div>
      </div>
  )
}

export default TodoItems
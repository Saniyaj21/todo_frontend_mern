import React from "react";
import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";


const Edit = () => {

  const {id} = useParams() 
  console.log(id)

  // one will be get by id and one will be patch request here

  const navigate = useNavigate()

  const editTodo =(e)=>{
    e.preventDefault();
    console.log("edit saved")
    navigate('/')
  }

  return (
    <div className="container">
      <div className="form">
        <form action="">
          <h4>Edit Todo</h4>
          <input id="edit-input" type="text" placeholder="Enter a todo.." />
          <Link  to={'/'}><button onClick={editTodo} type="submit">Save</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Edit;

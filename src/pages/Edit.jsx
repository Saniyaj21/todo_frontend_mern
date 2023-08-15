import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {server} from '../App'

const Edit = () => {
  const navigate = useNavigate();
  const [todoTitle, setTitle] = useState("");
  const params = useParams();
  let id = params.id

  const getTodo = async (id) =>{
    try {
      const { data } = await axios.get(`${server}/todo/${id}`);
      console.log("Requested data..******",data);
      console.log("Requested data.todo.title******",data.todo[0].title);
      setTitle(data.todo[0].title);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
   getTodo(id)
  }, [id]);

  const editTodo = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `${server}/todo/${id}`,
        {
          todoTitle
        },
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form action="">
          <h4>Edit Todo</h4>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="edit-input"
            type="text"
            value={todoTitle}
          />
          <Link to={"/"}>
            <button onClick={editTodo} type="submit">
              Save
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Edit;

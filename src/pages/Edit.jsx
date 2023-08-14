import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {server} from '../App'

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const getTodo = async (id) =>{
    try {
      console.log(id, typeof(id))
      const { data } = await axios.get(`${server}/todo/${id}`);
      setTitle(data.title);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
   getTodo(id)
  }, [id]);

  const editTodo = async(e, id) => {
    console.log(id, typeof(id))
    e.preventDefault();
    try {
      console.log(id, typeof(id))
      const { data } = await axios.patch(
        `${server}/task/${id}`,
        {
          title
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
            value={title}
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

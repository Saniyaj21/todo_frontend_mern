import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {server} from '../App'

const Edit = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { _id } = useParams();

  const getTodo = async (_id) =>{
    try {
      console.log(_id, typeof(_id))
      const { data } = await axios.get(`${server}/todo/${_id}`);
      console.log(data);
      setTitle(data.title);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
   getTodo(id)
  }, [id]);

  const editTodo = async(e, _id) => {
    console.log(_id, typeof(_id))
    e.preventDefault();
    try {
      console.log(_id, typeof(_id))
      const { data } = await axios.patch(
        `${server}/task/${_id}`,
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

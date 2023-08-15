import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {server} from '../App'

const Edit = () => {
  const navigate = useNavigate();
  const [todoTitle, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let id = params.id

  const getTodo = async (id) =>{
    try {
      setLoading(true)
      const { data } = await axios.get(`${server}/todo/${id}`);
      setTitle(data.todo[0].title);
      setLoading(false)
    } catch (error) {
      toast.error(error.message);
      setLoading(false)
    }
  }

  useEffect(() => {
   getTodo(id)
  }, [id]);

  const editTodo = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { data } = await axios.patch(
        `${server}/todo/${id}`,
        {
          title:todoTitle
        },
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false)
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false)
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
            <button onClick={editTodo} disabled={loading} type="submit">
              Save
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Edit;

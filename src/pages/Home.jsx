import React from "react";
import TodoItems from "../components/TodoItems";
import axios from "axios";
import { server } from "../App";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  // get all todos
  const getAllTodos = async () => {
    try {
      const { data } = await axios.get(`${server}/todo/`);
      setTodos(data.allTodos);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, [refresh]);

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { data } = await axios.post(
        `${server}/todo/`,
        {
          title,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTitle("");

      toast.success(data.message);

      setLoading(false)
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
      setLoading(false)
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true)
      console.log(id, typeof id);
      const { data } = await axios.delete(`${server}/todo/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setLoading(false)
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
      setLoading(false)
    }
  };

  return (
    <div className="home container">
      <div className="form">
        <form action="">
          <h4>Create Todo</h4>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter a todo.."
            value={title}
          />
          <button onClick={createTodo} disabled={loading} type="submit">
            Create
          </button>
        </form>
      </div>

      {todos.map((todo) => (
       
          <TodoItems
            id={todo._id}
            title={todo.title}
            deleteTodo={deleteTodo}
            key={todo._id}
            loading ={loading}
          />
       
      ))}
    </div>
  );
};

export default Home;

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

      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { data } = await axios.delete(`${server}/todo/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
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
          <button onClick={createTodo} type="submit">
            Create
          </button>
        </form>
      </div>

      {todos.map((todo) => (
          <TodoItems
            id={todo.id}
            title={todo.title}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        )
      )}
    </div>
  );
};

export default Home;

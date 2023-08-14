import React from "react";
import TodoItems from "../components/TodoItems";
import axios from "axios";
import { server } from "../App";
import { useState, useEffect } from "react";
import data from "../data.json";

const Home = () => {
  const [todos, setTodos] = useState([]);

 // get all todos
 const getAllTodos = async () => {
  const response = await axios.get(`${server}/todo/`);
  console.log(response);
};

  useEffect(() => {
    // getAllTodos()
    // delete todo get id from dodoitems pass be func reference in that

    setTodos(data);
    // console.log(data);
    // console.log(todos);
  }, []);

  const createTodo = (e) => {
    e.preventDefault();
    console.log("create");
  };

  return (
    <div className="home container">
      <div className="form">
        <form action="">
          <h4>Create Todo</h4>
          <input type="text" placeholder="Enter a todo.." />
          <button onClick={createTodo} type="submit">
            Create
          </button>
        </form>
      </div>

      {todos.map((todo) => {
        return <TodoItems id={todo.id} title={todo.title} />;
      })}
    </div>
  );
};

export default Home;

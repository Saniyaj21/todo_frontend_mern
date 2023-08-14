import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import './styles/main.scss'

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
    <Toaster />
  </Router>
  );
}

export default App;

export const server = "https://todo-app-benw.onrender.com/api/"
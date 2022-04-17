import "./App.scss";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import List from "./pages/List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />>} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  );
};

export default App;

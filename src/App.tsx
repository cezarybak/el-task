import "./App.scss";
import Navbar from "./components/Navbar";
import logo from "./assets/logo.png";
import Repo from "./assets/repo.svg";

const App = () => {
  return (
    <div>
      <Navbar />
      <img src={logo} alt="" className="navbar" />
      <Repo className="navbar" />
      <div className="container">Hello, World!</div>
    </div>
  );
};

export default App;

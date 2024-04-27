import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Students } from "./components/students/Students";
import { MapDemo } from "./components/MapDemo";

function App() {

  var title = "React App";
  var color = "red";

  return (
    <div className="App">
      <Header title = {title} color = {color}></Header>
      {/* <MapDemo></MapDemo> */}
      {/* <Students title = {title}></Students> */}

      {/* <Content></Content> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Students } from "./components/students/Students";
import { MapDemo } from "./components/MapDemo";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseSatteDemo3 } from "./components/UseSatteDemo3";

function App() {

  var title = "React App";
  var color = "red";

  return (
    <div className="App">
      <Header title = {title} color = {color}></Header>
      {/* <UseStateDemo></UseStateDemo> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      <UseSatteDemo3></UseSatteDemo3>
      {/* <MapDemo></MapDemo> */}
      {/* <Students title = {title}></Students> */}

      {/* <Content></Content> */}
    </div>
  );
}

export default App;

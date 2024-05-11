import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Students } from "./components/students/Students";
import { MapDemo } from "./components/MapDemo";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseSatteDemo3 } from "./components/UseSatteDemo3";
import { Route, Routes } from "react-router-dom";
import { NetflixMovies } from "./netflix/NetflixMovies";
import { NeflixShows } from "./netflix/NeflixShows";
import { Navbar } from "./Navbar";
import { NetflixHome } from "./netflix/NetflixHome";
import { Error404 } from "./Error404";

function App() {
  var title = "React App";
  var color = "red";

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/movies" element={<NetflixMovies />}></Route>
        <Route path="/shows" element={<NeflixShows />}></Route>
        <Route path= "" element = {<NetflixHome/>}></Route>
        {/* <Route path = "/*" element = {<h1>404 page not found</h1>}></Route> */}
        <Route path = "/*" element = {<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

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
import { ThrillerMovies } from "./netflix/ThrillerMovies";
import { ComedyMovies } from "./netflix/ComedyMovies";
import { PlayShow } from "./netflix/PlayShow";
import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { FormDemo4 } from "./forms/FormDemo4";
import { DepedenetDropdown } from "./components/DepedenetDropdown";
import { ApiDemo1 } from "./api/ApiDemo1";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { ApiDemo2 } from "./api/ApiDemo2";
import { UpdateUser } from "./api/UpdateUser";
import { MovieApi } from "./api/MovieApi";
import { ApiDemo4 } from "./api/ApiDemo4";
import { Google } from "./contextDemo/Google";
import { PublishBlog } from "./blogs/PublishBlog";
import { MuiButton } from "./mui/MuiButton";
import { MuiLayout } from "./mui/MuiLayout";
import { ChartDemo1 } from "./charts/ChartDemo1";
import { MuiTable } from "./mui/MuiTable";
import { MuiTable2 } from "./mui/MuiTable2";

function App() {
  var title = "React App";
  var color = "red";

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/movies" element={<NetflixMovies />}></Route>
        <Route path="/shows" element={<NeflixShows />}></Route>
        <Route path = "/movies/thriller" element = {<ThrillerMovies/>}></Route>
        <Route path = "/comedy" element = {<ComedyMovies/>}></Route>
        <Route path = "/shows/play/:id" element = {<PlayShow/>}></Route>
        <Route path = "/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path = "/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path = "/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path = "/formdemo4" element = {<FormDemo4/>}></Route>
        <Route path= "" element = {<NetflixHome/>}></Route>
        <Route path = "/depde" element = {<DepedenetDropdown/>}></Route>
        <Route path ="/useeffect" element = {<UseEffectDemo/>}></Route>
        <Route path="/apidemo1" element = {<ApiDemo1/>}></Route>
        <Route path="/apidemo2" element = {<ApiDemo2/>}></Route>
        <Route path="/apidemo4" element = {<ApiDemo4/>}></Route>
        <Route path = "/updateuser/:id" element = {<UpdateUser/>}></Route>
        <Route path = "/movieapi" element = {<MovieApi/>}></Route>
        <Route path = "/google" element = {<Google/>}></Route>
        <Route path ="/publishblog" element = {<PublishBlog/>}></Route>
        <Route path ="/muibbutton" element = {<MuiButton/>}></Route>
        <Route path ="/muiLayout" element = {<MuiLayout/>}></Route>
        <Route path ="/muitable" element = {<MuiTable2/>}></Route>
        <Route path = "/chart" element = {<ChartDemo1/>}></Route>

        {/* <Route path = "/*" element = {<h1>404 page not found</h1>}></Route> */}
        <Route path = "/*" element = {<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import {Outlet} from "react-router-dom";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";


function App() {

  return (
    <div className="App">
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App;

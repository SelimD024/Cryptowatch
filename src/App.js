import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Header/Navbar/Navbar";
import {ThemeProvider} from "@mui/material";
import theme from './theme';


function App() {
  return (

    <Router>
        <div className="App">

                <Navbar />
        </div>
    </Router>
  );
}

export default App;

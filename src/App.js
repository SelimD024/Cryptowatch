import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Header/Navbar/Navbar";
import {ThemeProvider} from "@mui/material";
import theme from './theme';
import Main from "./Components/Main/Main";
import About from "./Components/Pages/About/About";


function App() {
  return (
            <BrowserRouter>
        <div className="App">
            <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                </Routes>
        </div>
            </BrowserRouter>
  );
}

export default App;

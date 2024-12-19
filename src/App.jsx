import React,{Component,StrictMode} from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import "./style.css"
import About from "./Components/About";
import Footer from "./Components/Footer";

export default class App extends Component {
    render() {
        return(
            <StrictMode>
                <Navbar/>
                <About/>
                <Cards style={{display:"flex"}}/>
                <Footer/>
            </StrictMode>
        )
    }
}
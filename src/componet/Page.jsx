import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeContext";


const Page = ({isDark, setIsdark})=> {    
    return(
        <div>
            <Header  />
            <Content></Content>
            <Footer></Footer>
            
        </div>
    );
}

export default Page;
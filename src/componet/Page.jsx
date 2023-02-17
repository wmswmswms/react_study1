import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


const Page = ({isDark, setIsdark})=> {
    console.log(isDark);
    return(
        <div>
            <Header isDark={isDark} setIsdark={setIsdark} />
            <Content isDark={isDark} setIsdark={setIsdark}></Content>
            <Footer isDark={isDark} setIsdark={setIsdark}></Footer>
            
        </div>
    );
}

export default Page;
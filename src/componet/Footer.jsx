import { useContext } from "react";
import App from "../App";
import { ThemeContext } from "../context/ThemeContext";

const Footer = ()=>{

    const {isDark, setIsdark} = useContext(ThemeContext);

    const toggleTheme = ()=>{
        setIsdark(!isDark);
    }

    return(
        <div className="footer">
            <button onClick={toggleTheme}> Dark mode</button>           
        </div>
    )
}

export default Footer;
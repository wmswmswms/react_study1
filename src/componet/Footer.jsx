import App from "../App";

const Footer = ({isDark, setIsdark})=>{

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
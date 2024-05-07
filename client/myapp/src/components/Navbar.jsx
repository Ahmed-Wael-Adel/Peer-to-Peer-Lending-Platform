import Logo from "../assets/Logo2.png"
import "../componentsCss/Navbar.css"
function Navbar(){
    return(
        <div className="Main">
            <div className="Logo">
                <img src={Logo} alt="Loading"/>
            </div>
            <div className="Links">
                <a href="/" className="Link">HOME</a>
                <a href="/Sign_up" className="Link">SIGN UP</a>
                <a href="/About" className="Link">ABOUT</a>
                <a href="/Log_in" className="Login">LOG IN</a>
            </div>
        </div>
    )
}

export default Navbar;
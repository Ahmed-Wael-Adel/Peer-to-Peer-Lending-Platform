import "../componentsCss/Home.css"
import TrueIcon from "../assets/TrueIcon.png" 
import Lock from "../assets/Lock.png"
import Invest from "../assets/invest.jpeg" 
import Borrow from "../assets/Borrow.jpg"
import Logo from "../assets/main-pic.png"

function Home(){
    return(
        <div className="Body">
            <div className="Content">
                <div className="Tittle">
                    <span>Personal loans with low fixed rates*</span>
                </div>
                <div className="features">
                    <div className="first-Feature">
                        <img src={TrueIcon} alt="Loading" className="True-Icon"/>
                        <span>No hidden fees</span>
                    </div>
                    <div className="second-Feature">
                        <img src={TrueIcon} alt="Loading" className="True-Icon"/>
                        <span>Next day funds</span>
                    </div>
                </div>
                <div className="Check-Rate">
                        <button>Check your rate</button>
                </div>
                <div className="Score">
                        <img src={Lock} alt="Loading."/>
                        <span className="first-Span">Won't affect</span>
                        <span className="second-Span">your credit score</span>
                </div>
                <div className="Question">
                    <span>What would you like to do?</span>
                </div>
                <div className="Cards">
                    <div className="Single-Card">
                        <img src={Invest} alt="Loading.." className="Card-Pic"/>
                        <div className="Card-Tittle">
                            <span>Lender</span>
                        </div>
                        <div className="Card-Info">
                            <span>Empower Your Financial Journey And Start Investing Now</span>
                        </div>
                    </div>
                    <div className="Single-Card">
                        <img src={Borrow} alt="Loading.." className="Card-Pic"/>
                        <div className="Card-Tittle">
                            <span>Borrower</span>
                        </div>
                        <div className="Card-Info">
                            <span>Unlock Your Dreams with Loans</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*<img src={Logo} alt="Loading.." className="main-pic"/>*/}
        </div>
    )
}

export default Home;
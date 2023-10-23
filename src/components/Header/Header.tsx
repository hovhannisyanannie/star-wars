import { Link } from 'react-router-dom';
import { useState} from 'react';
import "./header.css";
import logo from "../../images/star_wars.jpg";



const Header = () => {
    const [click, setClick] = useState<boolean>(false);
    const handleClick = () => setClick(!click);
    
  return (
    <header>
          <div className="inner">
              <div className="box">

                    <Link to="/" >
                      <img src={logo} alt="Star Wars" />
                    </Link>                  
              </div>
              <div className="box">
                <nav>
                    <ul className={click ? "nav-menu active" : "nav-menu"}  onClick={handleClick}>
                        <li>
                            <Link to="/" className="nav-links" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="nav-links" >ABout</Link>
                        </li>
                    </ul>
                </nav>
              </div>
              <div className="nav-icon " onClick={handleClick}>
              {click ? (<i className="fa-solid fa-circle-xmark" ></i>):
              (<i className="fa-solid fa-bars-staggered"></i>)}
                
            </div>
          </div>
    </header>
  )
}

export default Header

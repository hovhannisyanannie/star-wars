import logo from '../../images/star_wars.jpg';
import './header.css';

const Header = () => {
  return (
    <header>
       <a href="/">
            <img src={logo} alt="Star Wars" />
       </a>
    </header>
  )
}

export default Header
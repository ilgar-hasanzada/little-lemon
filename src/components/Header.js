import Nav from './Nav';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Little Lemon logo" /> 
        <span>Little Lemon</span>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
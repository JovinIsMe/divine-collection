import './Header.css';

import Cookies from 'universal-cookie';
import Logo from '../../components/Logo/Logo';

const Header = () => {
  const userId = new Cookies().get('user_id');

  return (
    <div className='Header-container'>
      <Logo/>
      <div className='Header-topnav'>
        <ul>
          <li><a href="/">Home</a></li>
          { !userId && <li><a href="/login">Login</a></li> }
          { userId && <li><a href="/collections">Collections</a></li> }
          { userId && <li><a href="/logout">Logout</a></li> }
        </ul>
      </div>
    </div>
  );
}

export default Header;
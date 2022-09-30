import './Header.css';

import Cookies from 'universal-cookie';

const Header = () => {
  const userId = new Cookies().get('user_id');

  return (
    <div className='Header-container'>
      <span className='Header-title'>Divine Collection</span>
      <span className='Header-topnav'>
        { userId && <a href="/logout">Logout</a> }
        { userId && <a href="/collections">Collections</a> }
        { !userId && <a href="/login">Login</a> }
        <a href="/">Home</a>
      </span>
    </div>
  );
}

export default Header;
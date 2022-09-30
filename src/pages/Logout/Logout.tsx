import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Cookies from 'universal-cookie';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove('user_id');
    navigate("/");
  };

  useEffect(() => {handleLogout()});

  return <></>;
};

export default Logout;
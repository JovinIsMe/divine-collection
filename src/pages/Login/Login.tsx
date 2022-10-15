import { SyntheticEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Login.css';
import Header from '../../layouts/Header/Header';
import Cookies from 'universal-cookie';

const Login = () => {
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    userId: "",
  });

  const handleSubmit = (event:SyntheticEvent) => {
    event.preventDefault();
    if (formData.userId) {
      const cookies = new Cookies();
      cookies.set('user_id', formData.userId);

      navigate("/users/" + formData.userId);
    } else {
      alert("Please input the user ID!")
    }
  };

  return (
    <>
      <Header/>
      <div className="Login-container">
        <h3>Currently limited users can access the collections</h3>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="user-id">User ID</label>
                </th>
                <td>
                  <input id="user-id" type="text" value={formData.userId} required onChange={(e) => setFormData({...formData, userId: e.target.value})}/>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit" style={{width:"100%"}}>Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Login;
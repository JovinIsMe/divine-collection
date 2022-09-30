import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import Cookies from 'universal-cookie';

const Login = () => {
  const navigate = useNavigate();
  let [formData, setFormData] = useState({
    userId: "",
  });

  const handleSubmit = (event:any) => {
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
      <h1>Login</h1>
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
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
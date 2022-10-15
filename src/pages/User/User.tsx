import { useState, useEffect } from "react";
import './User.css';
import { db } from '../../firebase-config';
import { getDoc, DocumentData, doc } from "firebase/firestore";
import UserProps, { userInit, userNotExist } from "../../types/firebase/UserProps";
import Header from '../../layouts/Header/Header';
import Collections from '../../components/Collections/Collections';
import Cookies from 'universal-cookie';

const User = () => {
  const userId = new Cookies().get('user_id');
  const [user, setUser] = useState<DocumentData>(userInit);

  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(doc(db, "users", String(userId)));
      const userData = {...data.data(), id: data.id} as UserProps;
      if (userData.name === undefined) {
        setUser(userNotExist);
      } else {
        setUser(userData);
      }
    }
    
    getUser();
  }, [userId]);

  const promptNotAvailableYet = () => {
    alert("Sorry, but this operation is not available yet.");
  };

  return (
    <>
      <Header/>
      <div className="User">
        {
          <div key={userId}>
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>
                    User Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>User ID</th>
                  <td>{userId}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{user.name}</td>
                  <td><button onClick={promptNotAvailableYet}>Update</button></td>
                </tr>
                <tr>
                  <th>Desc</th>
                  <td>{user.desc}</td>
                  <td><button onClick={promptNotAvailableYet}>Update</button></td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{user.phone_number}</td>
                  <td><button onClick={promptNotAvailableYet}>Update</button></td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                  <td><button onClick={promptNotAvailableYet}>Update</button></td>
                </tr>
                <tr>
                  <th>Last Sign In</th>
                  <td>
                    Not available for now
                    {/* {user.last_sign_in} */}
                  </td>
                </tr>
              </tbody>
            </table>

            <hr/>

            <h2>Collections</h2>
            <Collections userId={userId}/>
          </div>
        }
      </div>
    </>
  );
}

export default User;

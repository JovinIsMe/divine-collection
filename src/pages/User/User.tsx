import { useState, useEffect } from "react";
import './User.css';
import { db } from '../../firebase-config';
import { getDoc, DocumentData, doc } from "firebase/firestore";

import Header from '../../layouts/Header/Header';
import Collections from '../../components/Collections/Collections';
import Cookies from 'universal-cookie';

// type UserProps = {
//   id: string
//   name: string
//   desc: string
//   phone_number: string
//   email: string
//   path: string
//   password:
//   created_at: 
//   last_sign_in: 
// }

const userId = new Cookies().get('user_id');

const User = () => {
  const [user, setUser] = useState<DocumentData>([]);

  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(doc(db, "users", String(userId)));
      setUser({...data.data(), id: data.id});
    }

    getUser();
  }, []);

  return (
    <>
      <Header/>
      <div className="User">
        {
          <div key={userId}>
            <h2>User Details</h2>
            <table>
              <tr>
                <th>User ID</th>
                <td>{userId}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Desc</th>
                <td>{user.desc}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{user.phone_number}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Last Sign In</th>
                <td>
                  {/* {user.last_sign_in} */}
                </td>
              </tr>
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

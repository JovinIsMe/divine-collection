import { useState, useEffect } from "react";
import './User.css';
import { db } from '../../firebase-config';
import { getDoc, DocumentData, doc } from "firebase/firestore";

import Header from '../../layouts/Header/Header';
import DisplayCardContainer from '../../components/DisplayCardContainer/DisplayCardContainer';
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
            <div>User ID: {userId}</div>
            <div>Name: {user.name}</div>
            <div>Desc: {user.desc}</div>
            <div>Phone Number: {user.phone_number}</div>
            <div>Email: {user.email}</div>
            {/* <div>Last Sign In: "{user.last_sign_in}"</div> */}
            <DisplayCardContainer userId={userId}/>
          </div>
        }
      </div>
    </>
  );
}

export default User;

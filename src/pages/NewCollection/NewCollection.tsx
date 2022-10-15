import { SyntheticEvent, useState } from "react";
import { db } from "../../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

import Cookies from 'universal-cookie';
import Header from "../../layouts/Header/Header";

const NewCollection = () => {
  const navigate = useNavigate();
  const userId = new Cookies().get('user_id');
  let collectionId = "";

  let [formData, setFormData] = useState({
    _user_id: userId,
    name: "",
    desc: "",
    favorite: false,
    // position:, 
    published: true,
    path: "",
    // created_at:Timestamp,
  });
  
  const handleSubmit = async (event:SyntheticEvent) => {
    event.preventDefault();
    if (collectionId === "") {
      const short = require('short-uuid');
      collectionId = short.generate();
    }

    await setDoc(doc(db, "collections", collectionId), formData);
    navigate("/collections/"+collectionId);
  };

  if (userId) {
    return (
      <>
        <Header/>
        <h1>Create New Collection</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="name">Name</label>
                </th>
                <td>
                  <input id="name" type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} required/>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="desc">Description</label>
                </th>
                <td>
                  <input id="desc" type="text" onChange={(e) => setFormData({...formData, desc: e.target.value})}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="path">Path</label>
                </th>
                <td>
                  <input id="path" type="text" onChange={(e) => setFormData({...formData, path: e.target.value})} required/>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <Header/>
        <h1>Please login first!</h1>
      </>
    );
  }
}

export default NewCollection;
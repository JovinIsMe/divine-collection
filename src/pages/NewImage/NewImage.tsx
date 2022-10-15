import { SyntheticEvent, useState } from "react";
import { db } from "../../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Header from "../../layouts/Header/Header";

const NewImage = () => {
  const navigate = useNavigate();
  const { collectionId } = useParams();
  let imageId = "";

  let [formData, setFormData] = useState({
    _collection_id: collectionId,
    name: "",
    desc: "",
    url: "",
    width: 0,
    height: 0,
    total_bytes: 0,
    favorite: false,
    // position:, 
    published: true,
    path: "",
    // created_at:Timestamp,
  });

  const handleSubmit = async(event:SyntheticEvent) => {
    event.preventDefault();
    if (imageId === "") {
      const short = require('short-uuid');
      imageId = short.generate();
    }

    await setDoc(doc(db, "images", imageId), formData);
    navigate("/collections/"+collectionId);
  };

  return (
    <>
      <Header/>
        <h1>Create New Image</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="name">Name</label>
                </th>
                <td>
                  <input id="name" type="text" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
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
                  <label htmlFor="url">URL</label>
                </th>
                <td>
                  <input id="url" type="text" onChange={(e) => setFormData({...formData, url: e.target.value})} required/>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="path">Path</label>
                </th>
                <td>
                  <input id="path" type="text" onChange={(e) => setFormData({...formData, path: e.target.value})}/>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Submit</button>
        </form>
    </>
  );
};

export default NewImage;
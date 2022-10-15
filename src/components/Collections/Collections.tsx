import { useState, useEffect } from "react";
import './Collections.css'
import { db } from '../../firebase-config';
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore";

type CollectionProps = {
  id: string
  _user_id: string
  name: string
  desc: string
  favorite: boolean
  position: number
  published: boolean
  path: string
  // created_at: 
}

const Collections = (props:any) => {
  const { userId } = props;

  const [collections, setCollections] = useState<DocumentData>([]);
  
  useEffect(() => {
    const getCollections = async () => {
      const collectionsColRef = collection(db, "collections");
      if(userId) {
        const q = query(collectionsColRef, where("_user_id", "==", userId));
        const data = await getDocs(q);
        setCollections(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
    }

    getCollections();
  }, [userId]);

  return (
    <div className="UserCollections">
      <ul>
        {
          collections.map((col:CollectionProps) => {
            return (
              <li key={col.id}>
                <a href={"/collections/" + col.id}>{col.name}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Collections;
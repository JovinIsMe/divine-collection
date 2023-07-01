import DisplayCard from '../../components/DisplayCard/DisplayCard';
import { useParams } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { getDoc, doc, DocumentData } from 'firebase/firestore';
import './Collections.css';

const userId = new Cookies().get('user_id');

const Collection = () => {
  const { collectionId } = useParams();
  
  const [collection, setCollection] = useState<DocumentData>([]);
  
  useEffect(() => {
    const getCollection = async () => {
      const data = await getDoc(doc(db, "collections", String(collectionId)));
      setCollection({...data.data(), id: data.id});
    };
    
    getCollection();
  }, [collectionId]);

  return (
    <>
      { !!userId && userId === collection._user_id && <Header/> }
      { !!userId && userId === collection._user_id && <><a href={"/collections/" + collectionId + "/new"} >New Image</a><br></br></> }

      <div className='Collection' key={collectionId}>
        <DisplayCard collectionId={collectionId}/>
      </div>
    </>
  );
}

export default Collection;
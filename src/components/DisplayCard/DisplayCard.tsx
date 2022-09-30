import { useState, useEffect } from "react";
import './DisplayCard.css';
import { db } from '../../firebase-config';
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore";

type ImageProps = {
  id: string
  _collection_id: string
  name: string
  desc: string
  url: string
  width: number
  height: number
  total_bytes: number
  favorite: boolean
  position: number
  published: boolean
  path: string
  // created_at:
}

const DisplayCard = (props:any) => {
  const { collectionId } = props;

  const [images, setImages] = useState<DocumentData>([]);
  
  useEffect(() => {
    const getImages = async () => {
      const imagesColRef = collection(db, "images");
      const q = query(imagesColRef, where("_collection_id", "==", collectionId));
      const data = await getDocs(q);
      setImages(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getImages();
  }, [collectionId]);

  return (
    <div className='DisplayCard-container'>
      {
        images.map((image:ImageProps) => {
          return (
            <div key={image.id}>
              <div className='DisplayCard-container'>
                <img src={image.url} className='DisplayCard-image' alt={image.name} />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayCard;
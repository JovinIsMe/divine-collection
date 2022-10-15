import { useState, useEffect } from "react";
import './DisplayCard.css';
import { ImageProps } from "../../types/firebase/ImageProps";
import { db } from '../../firebase-config';
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore";


const DisplayCard = (props:{collectionId?: string}) => {
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
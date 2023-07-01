import { useState, useEffect } from "react";
import './DisplayCard.css';
import { ImageProps } from "../../types/firebase/ImageProps";
import { db } from '../../firebase-config';
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore";

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const DisplayCard = (props:{collectionId?: string}) => {
  const { collectionId } = props;

  const [images, setImages] = useState<DocumentData>([]);

  const getThumbnailUrl = (url: string) => {
    const isCloudinaryAsset = url.startsWith("https://res.cloudinary.com/");
    if (!isCloudinaryAsset) return url

    const pathUrl = "/image/upload/";
    const thumbnailScale = "c_scale,h_500/";

    return url.replace(pathUrl, `${pathUrl}${thumbnailScale}`)
  }
  
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
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {
          images.map((image:ImageProps) => {
            return (
              <a key={image.id} href={image.url}>
                <img src={getThumbnailUrl(image.url)} className='DisplayCard-image' alt={image.name} />
              </a>
            )
          })
        }
      </LightGallery>
    </div>
  )
}

export default DisplayCard;
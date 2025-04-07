// src/Img_Adding/ImageGallery.jsx

import imageData from './data';
import './ImageGallery.css';

function ImageGallery() {
  return (
    <div className="gallery">
      {imageData.map((item, index) => (
        <div key={index} className="image-card">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;

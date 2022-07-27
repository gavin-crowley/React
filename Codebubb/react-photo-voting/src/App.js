import React, {useEffect, useState} from "react";


export function App() {
  const [images, setImages] = useState([]);

  const retrieveImages = async () => {
    try {
      const response = await fetch("http://localhost:3000/images");
      const imageData = await response.json();
      setImages(imageData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveImages();
  }, [])
  
  return (
    <div className="app">
      <h1>🏞 Image Voting</h1>
    </div>
  );
}

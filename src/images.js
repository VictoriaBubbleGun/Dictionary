import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Images(props) {
  let word = props.word;
  const [images, setImages] = useState([{}]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
    const Url = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;

    axios
      .get(Url)
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoaded(true);
      });
  }, [word]);

  if (loaded) {
    return (
      <div className="Images">
        <div className="row">
          {" "}
          {images.photos &&
            images.photos.length > 0 &&
            images.photos.map(function (photos, index) {
              if (index < 3) {
                return (
                  <div className="col-sm-4 mb-2 align-items-center" key={index}>
                    <a href={photos.url} target="_blank" rel="noreferrer">
                      <img
                        src={photos.src.portrait}
                        alt={photos.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    );
  } else {
    return <div className="Images text-center">Loading...</div>;
  }
}

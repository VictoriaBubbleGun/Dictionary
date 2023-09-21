import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Data(props) {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
    const Url = `https://api.shecodes.io/dictionary/v1/define?word=${props.keyword}&key=${apiKey}`;

    axios
      .get(Url)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoaded(true); // Set loaded to true even in case of an error to avoid infinite loading.
      });
  }, [props.keyword]);

  if (loaded) {
    return (
      <div className="Data">
        {data.meanings && data.meanings.length > 0 ? (
          <p className="text-center">{data.meanings[0].definition}</p>
        ) : (
          <p className="text-center">No meanings found</p>
        )}
      </div>
    );
  } else {
    return <div className="Data">Loading...</div>;
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Meanings from "./meanings";

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
        setLoaded(true);
      });
  }, [props.keyword]);

  if (loaded) {
    return (
      <div>
        <Meanings data={data} />
      </div>
    );
  } else {
    return <div className="Data text-center">Loading...</div>;
  }
}

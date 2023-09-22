import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

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
        <h2 className="text-center text-captialized">{data.word}</h2>
        {data &&
          data.meanings &&
          data.meanings.slice(0, 3).map(function (meaning, index) {
            return (
              <div key={index}>
                <div className="text-center text-underline">
                  Definition: {meaning.definition}
                  <br />
                  Part Of Speech: {meaning.partOfSpeech}
                  <em>
                    {meaning.synonyms &&
                      meaning.synonyms.map(function (synonym, synonymIndex) {
                        return (
                          <div className="pb-3" key={synonymIndex}>
                            Synonym: {synonym}
                            {synonymIndex < meaning.synonyms.length - 1 && ", "}
                          </div>
                        );
                      })}
                  </em>
                </div>
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div className="Data text-center">Loading...</div>;
  }
}

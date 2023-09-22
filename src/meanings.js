import React from "react";

export default function Meanings(props) {
  let data = props.data;

  return (
    <div className="Data">
      <div className="  card p-2 m-2 ">
        <strong>{data.word}</strong>
      </div>
      <div className="  card p-2 m-2">
        <strong>{data.phonetic}</strong>{" "}
      </div>
      {data &&
        data.meanings &&
        data.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
              <div className="">
                <div className="card p-2 m-2">
                  <strong> Definition:</strong> {meaning.definition}
                </div>
                <div className="card p-2 m-2">
                  <strong> Part Of Speech:</strong> {meaning.partOfSpeech}
                </div>{" "}
                <div className="card p-2 m-2">
                  <strong> Synonyms: </strong>
                  <em>
                    {meaning.synonyms &&
                      meaning.synonyms.map(function (synonym, synonymIndex) {
                        return (
                          <li className="" key={synonymIndex}>
                            {synonym}
                            {synonymIndex < meaning.synonyms.length - 1 && ", "}
                          </li>
                        );
                      })}
                  </em>{" "}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

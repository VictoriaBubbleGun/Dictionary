import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./meanings.css";

export default function Meanings(props) {
  let data = props.data;

  return (
    <div>
      {data.word && (
        <div className="card bg-info-subtle shadow p-2 m-3">
          <strong>{data.word}</strong>
        </div>
      )}
      {data.phonetic && (
        <div className="card bg-info-subtle shadow p-2 m-3">
          <strong>{data.phonetic}</strong>{" "}
        </div>
      )}
      {data &&
        data.meanings &&
        data.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
              <div className="">
                <div className="card bg-info-subtle shadow p-2 m-3">
                  <strong> Definition:</strong> {meaning.definition}
                </div>
                <div className="card bg-info-subtle shadow p-2 m-3">
                  <strong> Part Of Speech:</strong> {meaning.partOfSpeech}
                </div>
                {meaning.synonyms && meaning.synonyms.length > 0 && (
                  <div className="card bg-info-subtle shadow p-2 m-3">
                    <strong> Synonyms: </strong>
                    <em>
                      {meaning.synonyms.map(function (synonym, synonymIndex) {
                        return (
                          <li className="" key={synonymIndex}>
                            {synonym}
                            {synonymIndex < meaning.synonyms.length - 1 && ", "}
                          </li>
                        );
                      })}
                    </em>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

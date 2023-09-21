import React from "react";
import axios from "axios";

export default function Data(props) {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "c6415ot471311fe21b9018d4f7a3003e";
  const Url = `https://api.shecodes.io/dictionary/v1/define?word=${props.keyword}&key=${apiKey}`;
  axios.get(Url).then(handleResponse);

  return (
    <div className="Data">
      <h1 className="text-center"></h1>
    </div>
  );
}

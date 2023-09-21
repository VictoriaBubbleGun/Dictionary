import React, { useState } from "react";
import Data from "./data";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
  }

  function keywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary m-3">
      <h1 className="text-center">Dictionary</h1>
      <form onSubmit={search} className="text-center m-4">
        <input type="search" onChange={keywordChange} autoFocus="on" />
      </form>
      <Data keyword={keyword} />
    </div>
  );
}

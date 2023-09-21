import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary m-3">
      <h1 className="text-center">Dictionary</h1>
      <form onSubmit={search} className="text-center m-4">
        <input type="search" onChange={keywordChange} autoFocus="on" />
      </form>
    </div>
  );
}

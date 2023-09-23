import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import Data from "./data";
import "./dictionary.css";
import Images from "./images";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("woods");

  const [debouncedKeyword] = useDebounce(keyword, 500);

  function search(event) {
    event.preventDefault();
  }

  function keywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary m-3">
      <h1 className="text-center m-3 text-white">Dictionary</h1>
      <form onSubmit={search} className="text-center m-4">
        <input
          className="form-control"
          type="search"
          onChange={keywordChange}
          autoFocus="on"
          name="search"
          placeholder="Search for a word..."
          autoComplete="off"
        />
      </form>{" "}
      <Data keyword={debouncedKeyword} />
      <Images word={debouncedKeyword} />
    </div>
  );
}

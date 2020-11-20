import React, { useState } from "react";
import "../styles/HeadNav.scss";

function HeadNav({ setSearchField }) {
  const [searchInput, setSearchInput] = useState("");

  const runSearch = (e) => {
    e.preventDefault();
    setSearchField(searchInput);
  };

  return (
    <div className="HeadNav">
      <form onSubmit={runSearch}>
        <input
          className="inputField"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='Search'
        />
      </form>
    </div>
  );
}

export default HeadNav;

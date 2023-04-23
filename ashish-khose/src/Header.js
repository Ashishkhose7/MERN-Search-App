import { useEffect, useRef, useState } from "react";

let Header = (props) => {
  const searchInput = useRef();

  let handleSearch = () => {
    const searchData = searchInput.current.value;
    props.searchPropData(searchData);
  };

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          className="search"
          placeholder="Search here!"
          ref={searchInput}
        />
        <input
          name="submit"
          className="submit"
          value="Search"
          onClick={handleSearch}
        />
      </div>
    </>
  );
};

export default Header;

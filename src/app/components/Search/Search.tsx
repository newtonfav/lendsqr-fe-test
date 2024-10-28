import React from "react";
import Input from "../Input/Input";
import useInput from "../../utils/hooks/useInput";
import SearchIcon from "../icons/SearchIcon";

export default function Search() {
  const [search, changeSearch, clearSearch] = useInput<string>("");

  return (
    <div className="navbar__search--container">
      <Input
        type="text"
        placeholder="Search for anything"
        value={String(search)}
        setValue={changeSearch}
        clearValue={clearSearch}
        className="navbar__search--input"
        renderError={false}
      />
      <div className="navbar__search--button">
        <SearchIcon />
      </div>
    </div>
  );
}

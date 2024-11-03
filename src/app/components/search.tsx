import React, { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useInput from "../utils/hooks/useInput";
import Input from "./input";
import SearchIcon from "../assets/icons/search-icon";

export default function Search() {
  const [search, changeSearch, clearSearch] = useInput<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateUrlParams = useCallback(
    (query: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      //Check if there's a search term
      if (value) {
        params.set(query, value);
      } else {
        params.delete(query);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  useEffect(
    function () {
      if (search) {
        updateUrlParams("firstName", search);
      } else {
        updateUrlParams("firstName", "");
      }
    },
    [search, updateUrlParams]
  );

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

import React, { useCallback, useEffect } from "react";
import Input from "../Input/Input";
import useInput from "../../utils/hooks/useInput";
import SearchIcon from "../icons/SearchIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
    [search]
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

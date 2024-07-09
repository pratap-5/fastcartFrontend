import React, { useState } from "react";
import useData from "../zustand/useData";

function useSearch() {
  const { backendUrl, setSearchList } = useData();
  const [loading, setloading] = useState(false);

  const getSearchList = async (searchItem) => {
    setloading(true);
    try {
      const res = await fetch(
        `${backendUrl}/api/products/search/${searchItem}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setSearchList(data.searchList);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, getSearchList };
}

export default useSearch;

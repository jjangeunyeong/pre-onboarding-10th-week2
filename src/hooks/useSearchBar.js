import { useState, useCallback, useEffect } from "react";

const useSearchBar = (keyword) => {
  const [relatedSearch, setRelatedSearch] = useState([]);

  const getRelatedSearch = useCallback(async () => {
    const URL = `api/v1/search-conditions/?name=${keyword}`;
    if (keyword !== "") {
      const cacheStorage = await caches.open("search");
      const responsedCache = await cacheStorage.match(URL);
      try {
        if (responsedCache) {
          const SliceCache = (await responsedCache.json()).slice(0, 7);
          setRelatedSearch(SliceCache);
        } else {
          fetch(URL).then(async (response) => {
            const getRelatedSearch = await response.clone().json();
            setRelatedSearch(getRelatedSearch.slice(0, 7));
            cacheStorage.put(URL, response);
            console.info("calling api");
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, [keyword]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      getRelatedSearch();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [getRelatedSearch]);

  return [relatedSearch];
};

export default useSearchBar;

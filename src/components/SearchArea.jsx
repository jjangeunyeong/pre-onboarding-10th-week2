import { useState } from "react";
import styled from "styled-components";
import SearchBtn from "./SearchBtn";
import RelatedSearchArea from "./RelatedSearchArea";
import useSearchBar from "../hooks/useSearchBar";
import SearchIconImg from "../assets/searchIcon.png";

const SearchArea = () => {
  const [searchWord, setSearchWord] = useState("");
  const [relatedSearch] = useSearchBar(searchWord);
  const [focusIdx, setFocusIdx] = useState(-1);
  const handleChangeSearchWord = (e) => {
    setSearchWord(e.target.value);
    setFocusIdx(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && relatedSearch.length > 0) {
      setFocusIdx((prev) => (prev + 1) % relatedSearch.length);
    }
    if (e.key === "ArrowUp" && relatedSearch.length > 0) {
      setFocusIdx(
        (prev) => (prev - 1 + relatedSearch.length) % relatedSearch.length
      );
    }
    if (e.key === "Escape") {
      setFocusIdx(-1);
    }
    if (e.key === "Enter" && relatedSearch.length > 0 && focusIdx > -1) {
      setSearchWord(relatedSearch[focusIdx]["name"]);
    }
  };

  return (
    <>
      <SearchBar>
        <SearchIcon src={SearchIconImg} />
        <SearchInput
          value={searchWord}
          onChange={handleChangeSearchWord}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <SearchBtn />
      </SearchBar>
      <RelatedSearchArea
        searchWord={searchWord}
        relatedSearch={relatedSearch}
        focusIdx={focusIdx}
      />
    </>
  );
};

const SearchIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 22px;
  width: 25px;
  height: 25px;
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0 10px;
`;

const SearchInput = styled.input`
  font-size: 18px;
  width: 500px;
  height: 60px;
  border-radius: 30px 0 0 30px;
  padding-left: 60px;
`;

export default SearchArea;

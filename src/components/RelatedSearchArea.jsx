import styled from "styled-components";
import PropTypes from "prop-types";
import SearchIconImg from "../assets/searchIcon.png";

const RelatedSearchArea = ({ relatedSearch, focusIdx, searchWord }) => {
  return (
    <Ul>
      <SubTitle>추천 검색어</SubTitle>
      {relatedSearch.length > 0 && searchWord !== "" ? (
        relatedSearch.map((keyword, idx) => {
          return (
            <RelatedBox key={`box-${keyword.name}-${idx}`}>
              <SearchIcon
                key={`searchIcon-${keyword.name}-${idx}`}
                src={SearchIconImg}
              />
              <Li key={`${keyword.name}-${idx}`} focus={focusIdx === idx}>
                {keyword.name}
              </Li>
            </RelatedBox>
          );
        })
      ) : (
        <Li none>검색어 없음</Li>
      )}
    </Ul>
  );
};

const RelatedBox = styled.div`
  display: flex;
`;

const SearchIcon = styled.img`
  margin-left: 19px;
  margin-top: 19px;
  width: 20px;
  height: 20px;
`;

const SubTitle = styled.div`
  color: gray;
  font-size: 11px;
  margin: 10px 20px 0px;
`;

const Ul = styled.ul`
  position: relative;
  border-radius: 15px;
  padding: 20px 0 30px;
  width: 580px;
  background-color: white;
`;

const Li = styled.li`
  list-style: none;
  padding: 20px 12px 0;
  font-size: 17px;
  color: ${({ focus }) => (focus ? "#357ae1" : "black")};
  font-weight: ${({ focus }) => (focus ? "bold" : "normal")};

  ${({ none }) => (none ? "margin-left : 8px" : "")};
`;

RelatedSearchArea.propTypes = {
  relatedSearch: PropTypes.array,
  focusIdx: PropTypes.number,
  searchWord: PropTypes.string,
};

export default RelatedSearchArea;

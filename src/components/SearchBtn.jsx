import styled from "styled-components";

const SearchBtn = () => {
  return <Btn type="button">검색</Btn>;
};

const Btn = styled.button`
  color: white;
  background-color: #357ae1;
  width: 80px;
  font-weight: bold;
  border-radius: 0 30px 30px 0;
`;

export default SearchBtn;

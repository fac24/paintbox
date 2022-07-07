import styled from "styled-components";

const JournalImage = styled.img`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  border-width: 4px;
  cursor: pointer;
  // border-radius: 56% 44% 73% 27% / 45% 68% 32% 55%;
  border-radius: 16%;
  max-width: 100%;
  display: block;
  grid-area: image;
`;

export default JournalImage;

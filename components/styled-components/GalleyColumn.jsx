import styled from "styled-components";

const GalleryColumn = styled.div`
  // -ms-flex: 25%; /* IE10 */
  // flex: 25%;
  // max-width: 25%;
  // padding: 0 4px;

  // @media screen and (max-width: 800px) {
  //   -ms-flex: 50%;
  //   flex: 50%;
  //   max-width: 50%;
  // }

  // /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  // @media screen and (max-width: 600px) {
  //   -ms-flex: 100%;
  //   flex: 100%;
  //   max-width: 100%;
  // }
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;

  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export default GalleryColumn;

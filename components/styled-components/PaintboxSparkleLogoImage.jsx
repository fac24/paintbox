import styled from "styled-components";

const PaintboxSparkleLogoImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding: 5%;

  // for mobile screens.
  @media only screen and (max-width: 768px) {
    width: 55%;
  }
`;

export default PaintboxSparkleLogoImage;

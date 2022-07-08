import styled from "styled-components";

const PaintboxSparkleLogoImage = styled.img`
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  height: auto%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 25rem;
  padding: 6%;

  // for mobile screens.
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
`;

export default PaintboxSparkleLogoImage;

import styled from "styled-components";

const MoodPost = styled.ul`
  display: grid;
  padding: 2rem;
  list-style-type: none;
  grid-template-columns: 300px 1fr;
  // gap: 1rem;
  gap: 5rem;
  align-items: center;
  max-width: 800px;
  margin: 3rem;
  font: 500 100%/1.5 system-ui;

  // for mobile screens.
  @media only screen and (max-width: 768px) {
    gap: 3rem;
    padding: 0rem;
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;

export default MoodPost;

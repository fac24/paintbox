import styled from "styled-components";

const MoodPost = styled.ul`
  display: grid;
  padding: 2rem;
  list-style-type: none;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  align-items: center;
  max-width: 800px;
  margin: 3rem;
  font: 500 100%/1.5 system-ui;
`;

export default MoodPost;

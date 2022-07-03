import styled from "styled-components";

const MoodPost = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 3.5rem 0px;
  border-top: 4px solid rgba(255, 255, 255, 0.2);

  &:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 835px) {
    grid-template-columns: 1fr;
  }
`;

export default MoodPost;

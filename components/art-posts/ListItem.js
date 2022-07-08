import { useRouter } from "next/router";
import { useState } from "react";
import ArtUploadImage from "../styled-components/ArtUploadImage";
import MoodPost from "../styled-components/MoodPost";
import styled from "styled-components";
import RainbowBorder from "../styled-components/RainbowBorder";
import JournalImage from "../styled-components/JournalImage";
import ListBox from "../styled-components/ListBox";
import ChoiceOfMood from "../styled-components/ChoiceOfMood";

function ListItem(props) {
  const [visibility, setVisibility] = useState(true);
  const router = useRouter();

  const date = new Date(props.inserted_at).toLocaleString();

  function toggleVisibility() {
    setVisibility(!visibility);
  }
  return visibility ? (
    <RainbowBorder>
      <MoodPost key={props.id}>
        <p>
          {date.slice(0, 10)}
          <JournalImage src={props.img} alt={props.alt} />
        </p>
        <ListBox>
          <ChoiceOfMood>Mood: {props.mood}</ChoiceOfMood>
          <Button onClick={toggleVisibility}>Hide post</Button>
          <p>Username: {props.email}</p>
          <p>{props.caption}</p>
          <Button onClick={() => router.push(props.href)}>Open...</Button>
        </ListBox>
        {/* <div>
          <Button onClick={() => router.push(href)}>Open...</Button>
        </div> */}
      </MoodPost>
    </RainbowBorder>
  ) : (
    <Button onClick={toggleVisibility}>Show post again</Button>
  );
}

export default ListItem;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

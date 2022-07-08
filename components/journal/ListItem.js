import { useState } from "react";
import { useRouter } from "next/router";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import ArtUploadImage from "../styled-components/ArtUploadImage";
import MoodPost from "../styled-components/MoodPost";
import ListBox from "../styled-components/ListBox";
import ChoiceOfMood from "../styled-components/ChoiceOfMood";
import RainbowBorder from "../styled-components/RainbowBorder";
import styled from "styled-components";

function ListItem(props) {
  const [visibility, setVisibility] = useState(false);

  const router = useRouter();

  const date = new Date(props.inserted_at).toLocaleString();

  function toggleOptionsVisibility() {
    setVisibility(!visibility);
  }

  return (
    <RainbowBorder>
      <MoodPost>
        <ListBox key={props.id}>
          <ChoiceOfMood>Mood: {props.mood}</ChoiceOfMood>
          <p>{date.slice(0, 17)}</p>
          <Button onClick={toggleOptionsVisibility}>...</Button>
          {visibility ? (
            <div>
              <DeletePost id={props.id} />
              <UpdatePost id={props.id} />
            </div>
          ) : null}
          <ArtUploadImage src={props.img} alt={props.alt} />
          <MoodUserInfo>Username: {props.email}</MoodUserInfo>
          <p>{props.caption}</p>
          <Button onClick={() => router.push(props.href)}>Open...</Button>
        </ListBox>
      </MoodPost>
    </RainbowBorder>
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

const MoodUserInfo = styled.p`
  // for mobile screens.
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

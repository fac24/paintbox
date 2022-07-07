import { useRouter } from "next/router";
<<<<<<< HEAD
import ListBox from "../styled-components/ListBox";
import styled from "styled-components";
// import ArtUploadImage from "../styled-components/ArtUploadImage";
// import WholeJournalWrapper from "../styled-components/WholeJournalWrapper";
import ChoiceOfMood from "../styled-components/ChoiceOfMood";
import JournalImage from "../styled-components/JournalImage";
import MoodPost from "../styled-components/MoodPost";
import RainbowBorder from "../styled-components/RainbowBorder";
=======
import ArtUploadImage from "../styled-components/ArtUploadImage";
import ListItem from "./ListItem";
>>>>>>> a749a742afc6268e0d7453ee25009e1f87f24e19

function JournalFeed(props) {
  const router = useRouter();

  const allArts = props.arts || [];

  console.log(allArts);

  return (
    <div>
      {allArts.map((art) => {
        const href = `/posts/${art.id}`;
        return (
<<<<<<< HEAD
          <>
            <RainbowBorder>
              <MoodPost key={art.id}>
                <p>
                  {art.date}
                  <JournalImage src={art.img} alt={art.alt} />
                </p>
                <ListBox>
                  {/* <DescriptionContainer key={art.id}> */}
                  <ChoiceOfMood>{art.mood}</ChoiceOfMood>
                  <p>{art.caption}</p>
                  <div>
                    <Button onClick={() => router.push(href)}>Open...</Button>
                  </div>
                </ListBox>
              </MoodPost>
            </RainbowBorder>
          </>
=======
          <ListItem
            key={art.id}
            id={art.id}
            mood={art.mood}
            inserted_at={art.inserted_at}
            img={art.img}
            alt={art.alt}
            email={art.email}
            caption={art.caption}
            href={href}
          />
>>>>>>> a749a742afc6268e0d7453ee25009e1f87f24e19
        );
      })}
    </div>
  );
}

export default JournalFeed;

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

// render(
//   <div>
//     <Button primary>Primary</Button>
//   </div>
// );

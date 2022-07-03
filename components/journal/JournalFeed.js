import { useRouter } from "next/router";
// import ArtUploadImage from "../styled-components/ArtUploadImage";
import ChoiceOfMood from "../styled-components/ChoiceOfMood";
import JournalImage from "../styled-components/JournalImage";
import MentartWrapper from "../styled-components/MentartWrapper";

function JournalFeed(props) {
  const router = useRouter();

  const allArts = props.arts;

  return (
    <MentartWrapper>
      {allArts.map((art) => {
        const href = `/posts/${art.id}`;
        return (
          <li key={art.id}>
            <ChoiceOfMood>{art.mood}</ChoiceOfMood>
            <p>{art.date}</p>
            <JournalImage src={art.img} alt={art.alt} />
            <p>{art.caption}</p>
            <button onClick={() => router.push(href)}>Open...</button>
          </li>
        );
      })}
    </MentartWrapper>
  );
}

export default JournalFeed;

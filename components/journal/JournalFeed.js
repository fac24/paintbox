import { useRouter } from "next/router";
// import DescriptionContainer from "../styled-components/DescriptionContainer";
// import ArtUploadImage from "../styled-components/ArtUploadImage";
// import WholeJournalWrapper from "../styled-components/WholeJournalWrapper";
import ChoiceOfMood from "../styled-components/ChoiceOfMood";
import JournalImage from "../styled-components/JournalImage";
import MentartWrapper from "../styled-components/MentartWrapper";
// import MentartWrapper from "../styled-components/MentartWrapper";
import MoodPost from "../styled-components/MoodPost";
import RainbowBorder from "../styled-components/RainbowBorder";

function JournalFeed(props) {
  const router = useRouter();

  const allArts = props.arts;

  return (
    <div>
      {allArts.map((art) => {
        const href = `/posts/${art.id}`;
        return (
          <>
            <RainbowBorder>
              <MoodPost key={art.id}>
                <p>
                  {art.date}
                  <JournalImage src={art.img} alt={art.alt} />
                </p>
                <li>
                  {/* <DescriptionContainer key={art.id}> */}
                  <ChoiceOfMood>{art.mood}</ChoiceOfMood>
                  <p>{art.caption}</p>
                  <button onClick={() => router.push(href)}>Open...</button>
                </li>
              </MoodPost>
            </RainbowBorder>
          </>
        );
      })}
    </div>
  );
}

export default JournalFeed;

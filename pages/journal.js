import JournalFeed from "../components/journal/JournalFeed";
import WholeJournalToTheRainbow from "../components/styled-components/WholeJournalToTheRainbow";
import MoodPost from "../components/styled-components/MoodPost";
// import MentartWrapper from "../components/styled-components/MoodPost";
import { supabase } from "../utils/supabaseClient";
// import RainbowBorder from "../components/styled-components/RainbowBorder";

function Journal(props) {
  return (
    <div>
      <WholeJournalToTheRainbow>MentArt Journal</WholeJournalToTheRainbow>
      <JournalFeed arts={props.arts} />
    </div>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from("arts").select();

  return {
    props: {
      arts: data,
    },
    revalidate: 10,
  };
}

export default Journal;

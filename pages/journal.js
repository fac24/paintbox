import JournalFeed from "../components/journal/JournalFeed";

import { supabase } from "../utils/supabaseClient";

function Journal(props) {
  return (
    <div>
      <h2>MentArt Journal</h2>
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
  };
}

export default Journal;

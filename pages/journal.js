import JournalFeed from "../components/journal/JournalFeed";

import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";

function Journal(props) {
  //const [allArts, setAllArts] = useState("");

  /* useEffect(() => {
    async function getArts() {
      const { data, error } = await supabase.from("arts").select();
      setAllArts(data);
    }
  }, [allArts]); */

  /*   async function clickHandler() {
    const { data, error } = await supabase.from("arts").select();

    setAllArts(data);
  } */

  return (
    <div>
      <h2>MentArt Journal</h2>
      {/*       <button onClick={clickHandler}>Click to get posts</button>
      <p>{allArts.mood}</p> */}
      <JournalFeed arts={props.arts} />
    </div>
  );
}

/* export async function getStaticProps() {
  const { data, error } = await supabase.from("arts").select();

  return {
    props: {
      arts: data,
    },
    revalidate: 10,
  };
} */

export async function getServerSideProps(context) {
  const { data, error } = await supabase.from("arts").select();

  const user = (await supabase.auth.api.getUserByCookie(context.req)) || [];

  if (!user.user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  return {
    props: {
      arts: data,
      user: user.user,
    },
  };
}

export default Journal;

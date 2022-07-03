// import React from "react";
// import Head from "next/head";
// import styled from "styled-components";
import JournalFeed from "../components/journal/JournalFeed";
import WholeJournalToTheRainbowTitle from "../components/styled-components/WholeJournalToTheRainbowTitle";
// import MoodPost from "../components/styled-components/MoodPost";
// import MentartWrapper from "../components/styled-components/MentartWrapper";
import { supabase } from "../utils/supabaseClient";
// import RainbowBorder from "../components/styled-components/RainbowBorder";

function Journal(props) {
  return (
    <div>
      <WholeJournalToTheRainbowTitle>
        MentArt Journal
      </WholeJournalToTheRainbowTitle>
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

// const Top = styled.div`
//   background-color: lilac;
// `;
// const globalStyle = `
// body{
//   background-color: var(--deep-soothing-ocean);
// }
// `;

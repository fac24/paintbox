// import React from "react";
// import Head from "next/head";
// import styled from "styled-components";
import JournalFeed from "../components/journal/JournalFeed";
import WholeJournalToTheRainbowTitle from "../components/styled-components/WholeJournalToTheRainbowTitle";
// import MoodPost from "../components/styled-components/MoodPost";
// import MentartWrapper from "../components/styled-components/MentartWrapper";

import SelectArts from "../components/art-posts/SelectArts";

import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";
// import RainbowBorder from "../components/styled-components/RainbowBorder";

import { useRouter } from "next/router";

function Journal(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <WholeJournalToTheRainbowTitle>
        MentArt Journal
      </WholeJournalToTheRainbowTitle>
      <JournalFeed arts={props.arts} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = (await supabase.auth.api.getUserByCookie(context.req)) || [];

  const { data, error } = await supabase
    .from("arts")
    .select()
    .eq("email", user.user.email);

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

// const Top = styled.div`
//   background-color: lilac;
// `;
// const globalStyle = `
// body{
//   background-color: var(--deep-soothing-ocean);
// }
// `;

import JournalFeed from "../components/journal/JournalFeed";

import SelectArts from "../components/art-posts/SelectArts";

import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";

import { useRouter } from "next/router";

function Journal(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>MentArt Journal</h2>
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

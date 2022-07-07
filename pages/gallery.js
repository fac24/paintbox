import { useState } from "react";
import { useRouter } from "next/router";

import FilterNav from "../components/filter/FilterNav";

import { supabase } from "../utils/supabaseClient";
import SelectArts from "../components/art-posts/SelectArts";

function Gallery(props) {
  const [mood, setMood] = useState("all");
  const router = useRouter();

  const allArts = props.arts || [];
  const moods = props.moods || [];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <FilterNav moods={moods} arts={allArts} mood={mood} setMood={setMood} />
      <ul>
        {allArts
          .filter((art) => mood === "all" || art.mood === mood)
          .map((art) => {
            const href = `/posts/${art.id}`;
            const date = new Date(art.inserted_at).toLocaleString();
            return (
              <li key={art.id}>
                <h3>{art.mood}</h3>
                <p>{date.slice(0, 10)}</p>
                <img src={art.img} alt={art.alt} />
                <p>{art.caption}</p>
                <button onClick={() => router.push(href)}>Open...</button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const arts = await supabase.from("arts").select().eq("public", "true");
  const moods = await supabase.from("moods").select();

  const user = (await supabase.auth.api.getUserByCookie(req)) || [];

  if (!user.user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  return {
    props: {
      arts: arts.data,
      moods: moods.data,
      user: user.user,
    },
  };
}

export default Gallery;

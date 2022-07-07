import { useState } from "react";
import { useRouter } from "next/router";

import ArtUploadImage from "../components/styled-components/ArtUploadImage";
import ChoiceOfMood from "../components/styled-components/ChoiceOfMood";

import FilterNav from "../components/filter/FilterNav";
import MoodPost from "../components/styled-components/MoodPost";
import { supabase } from "../utils/supabaseClient";
import SelectArts from "../components/art-posts/SelectArts";
import RainbowBorder from "../components/styled-components/RainbowBorder";
import GalleryColumn from "../components/styled-components/GalleyColumn";
import GalleryRow from "../components/styled-components/GalleryRow";

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

              <>
                {/* <GalleryRow>
                  <GalleryColumn> */}
                <RainbowBorder>
                  <MoodPost key={art.id}>
                    <ChoiceOfMood>{art.mood}</ChoiceOfMood>
                    <p>{date.slice(0, 10)}</p>
                    <ArtUploadImage src={art.img} alt={art.alt} />
                    <p>{art.caption}</p>
                    <button onClick={() => router.push(href)}>Open...</button>
                  </MoodPost>
                </RainbowBorder>
                {/* </GalleryColumn>
                </GalleryRow> */}
              </>

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

// .gallery__item--1 {
//   grid-column-start: 1;
//   grid-column-end: 3;
//   grid-row-start: 1;
//   grid-row-end: 3;
// }

// .gallery__item--2 {
//   grid-column-start: 3;
//   grid-column-end: 5;
//   grid-row-start: 1;
//   grid-row-end: 3;
// }

// .gallery__item--3 {
//   grid-column-start: 5;
//   grid-column-end: 9;
//   grid-row-start: 1;
//   grid-row-end: 6;
// }

// .gallery__item--4 {
//   grid-column-start: 1;
//   grid-column-end: 5;
//   grid-row-start: 3;
//   grid-row-end: 6;
// }

// .gallery__item--5 {
//   grid-column-start: 1;
//   grid-column-end: 5;
//   grid-row-start: 6;
//   grid-row-end: 9;
// }

// .gallery__item--6 {
//   grid-column-start: 5;
//   grid-column-end: 9;
//   grid-row-start: 6;
//   grid-row-end: 9;
// }

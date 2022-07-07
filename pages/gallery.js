import { useState } from "react";
import { useRouter } from "next/router";

import ArtUploadImage from "../components/styled-components/ArtUploadImage";
import ChoiceOfMood from "../components/styled-components/ChoiceOfMood";
// import Button from "../components/journal/ListItem";
import FilterNav from "../components/filter/FilterNav";
// import MoodPost from "../components/styled-components/MoodPost";
import { supabase } from "../utils/supabaseClient";
import SelectArts from "../components/art-posts/SelectArts";
import RainbowBorder from "../components/styled-components/RainbowBorder";
import styled from "styled-components";
import ListBox from "../components/styled-components/ListBox";
import GalleryContainer from "../components/styled-components/GalleryContainer";

function Gallery(props) {
  // const { articles } = data.graphcmsdata;
  const [mood, setMood] = useState("all");
  const [invisible, setInvisible] = useState(false);
  const router = useRouter();

  const allArts = props.arts || [];
  const moods = props.moods || [];

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  function toggleInvisible() {
    setInvisible(!invisible);
  }

  return (
    <section>
      <FilterNav moods={moods} arts={allArts} mood={mood} setMood={setMood} />
      <GalleryWrap>
        {allArts
          .filter((art) => mood === "all" || art.mood === mood)
          .map((art) => {
            const href = `/posts/${art.id}`;
            const date = new Date(art.inserted_at).toLocaleString();
            return (
              <>
                {/* <MoodPost> */}
                <GalleryContainer>
                  <ListBox key={art.id}>
                    <ChoiceOfMood>{art.mood}</ChoiceOfMood>
                    <p>{date.slice(0, 10)}</p>
                    <GalleryItem className="two three four five">
                      <GalleryImage src={art.img} alt={art.alt} />
                    </GalleryItem>
                    <button onClick={toggleInvisible}>...show mood</button>
                    {invisible ? (
                      <div>
                        <p>{art.caption}</p>
                      </div>
                    ) : null}
                    <button onClick={() => router.push(href)}>Open...</button>
                  </ListBox>
                </GalleryContainer>
              </>
            );
          })}
        {/* </ul> */}
      </GalleryWrap>
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

const GalleryWrap = styled.div`
  grid-area: main;
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3chautominmax (10px, 60px);
  padding: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

// export const gridArea = (index) => {
//   switch (index) {
//     case 0:
//       return "hero";
//     case 1:
//       return "of1";
//     case 2:
//       return "of2";
//     default:
//       return null;
//   }
// };

const GalleryItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  .two {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .three {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .four {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .five {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }
`;

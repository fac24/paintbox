import { useState } from "react";
import { useRouter } from "next/router";
import ChoiceOfMood from "../components/styled-components/ChoiceOfMood";
import FilterNav from "../components/filter/FilterNav";
import MoodPost from "../components/styled-components/MoodPost";
import { supabase } from "../utils/supabaseClient";
import SelectArts from "../components/art-posts/SelectArts";
import ArtUploadImage from "../components/styled-components/ArtUploadImage";
import RainbowBorder from "../components/styled-components/RainbowBorder";
import styled from "styled-components";
import GalleryColumn from "../components/styled-components/GalleyColumn";
import GalleryRow from "../components/styled-components/GalleryRow";
import ListBox from "../components/styled-components/ListBox";

function Gallery(props) {
  // const { articles } = data.graphcmsdata;
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
                <GalleryWrap>
                  {/* <RainbowBorder> */}
                  <ListBox key={art.id}>
                    <ChoiceOfMood>{art.mood}</ChoiceOfMood>
                    <p>{date.slice(0, 10)}</p>
                    <GalleryItem__One>
                      <GalleryImage src={art.img} alt={art.alt} />
                    </GalleryItem__One>
                    <p>{art.caption}</p>
                    <button onClick={() => router.push(href)}>Open...</button>
                  </ListBox>
                  {/* </RainbowBorder> */}
                </GalleryWrap>
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

const GalleryWrap = styled.div`
  grid-area: main;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero   hero   of1"
    "hero   hero   of2";
  height: 100vh;
`;

const GalleryImage = styled.img`
  // width: 100%;
  // height: 100%;
  // object-fit: cover;

  max-height: ${(props) => props.height};
  max-width: ${(props) => props.width};
  grid-area: ${(props) => props.gridArea};
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
`;

export const gridArea = (index) => {
  switch (index) {
    case 0:
      return "hero";
    case 1:
      return "of1";
    case 2:
      return "of2";
    default:
      return null;
  }
};

const GalleryItem__One = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  & {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  & {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  & {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  & {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  & {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }
`;

// const GalleryItem__Two = styled.div`
//   grid-column-start: 3;
//   grid-column-end: 5;
//   grid-row-start: 1;
//   grid-row-end: 3;
// `;

// const GalleryItem__Three = styled.div``;

// const GalleryItem__Four = styled.div``;

// const GalleryItem__Five = styled.div``;

// const GalleryItem__Six = styled.div``;

// .gallery {
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: repeat(8, 5vw);
//   grid-gap: 15px;
// }

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

import { useEffect, useState } from "react";

import UploadForm from "../components/upload/UploadForm";
import MoodCollection from "../components/filter/MoodCollection";
import MoodCount from "../components/filter/moodCount";

import StyledDiv from "../components/styled-components/StyledDiv";
import ArtShareEmotionUpload from "../components/styled-components/ArtShareEmotionUpload";

import { supabase } from "../utils/supabaseClient";

function Upload(props) {
  const [moodInput, setMoodInput] = useState();
  const [moodCount, setMoodCount] = useState();
  const moodArray = MoodCollection();
  const count = MoodCount(moodInput, props.moods);

  useEffect(() => {
    setMoodCount(count[0] + 1);
  }, [count]);

  async function addArtDataHandler(inputs) {
    setMoodInput(inputs.mood);
    const { data, error } = await supabase
      .from("arts")
      .insert([
        {
          mood: inputs.mood,
          alt: inputs.alt,
          caption: inputs.caption,
          public: inputs.public,
          prompt: inputs.prompt,
          img: inputs.img,
        },
      ])
      .then((data) => {
        return data;
      });

    if (!moodArray.includes(inputs.mood)) {
      const { data, error } = await supabase
        .from("moods")
        .insert([
          {
            mood: inputs.mood,
            count: 1,
          },
        ])
        .then((data) => {
          return data;
        });
    } else {
      const { data, error } = await supabase
        .from("moods")
        .update({ count: 2 })
        .eq("count", 1);
    }
  }

  return (
    <ArtShareEmotionUpload>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feelings with the community or you
        can store them in your MentArt Journal.
      </p>
      <StyledDiv>
        <UploadForm addArtData={addArtDataHandler} />
      </StyledDiv>
    </ArtShareEmotionUpload>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from("moods").select();

  const array = data.map((mood) => {
    return {
      mood: mood.mood,
      count: mood.count,
    };
  });

  return {
    props: {
      moods: array,
    },
    revalidate: 20,
  };
}

export default Upload;

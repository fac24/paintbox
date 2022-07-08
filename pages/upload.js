import { useEffect, useState } from "react";

import UploadForm from "../components/upload/UploadForm";
import MoodCollection from "../components/filter/MoodCollection";
import MoodCount from "../components/filter/moodCount";

import StyledDiv from "../components/styled-components/StyledDiv";
import ArtShareEmotionUpload from "../components/styled-components/ArtShareEmotionUpload";

import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

function Upload(props) {
  const [moodInput, setMoodInput] = useState("");
  const [moodCount, setMoodCount] = useState(0);
  const [sessionId, setSessionId] = useState(supabase.auth.session()); //pass down as props later!!
  const router = useRouter();
  const moodArray = MoodCollection();
  const count = MoodCount(moodInput, props.moods);

  const everymoodarr = props.moods.map((mood) => mood.mood);

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
          user_id: sessionId.user.id,
          alt: inputs.alt,
          caption: inputs.caption,
          public: inputs.public,
          prompt: inputs.prompt,
          img: inputs.img,
          email: sessionId.user.email,
        },
      ])
      .then((data) => {
        return data;
      });

    if (!everymoodarr.includes(inputs.mood)) {
      console.log("inserting");
      const { data, error } = await supabase.from("moods").insert([
        {
          mood: inputs.mood,
          count: 1,
        },
      ]);
    } else {
      console.log("else statement");
      const { data, error } = await supabase
        .rpc("increment", {
          x: 1,
          mood_name: inputs.mood,
        })
        .then((data) => {
          return data;
        });
    }

    console.log(moodArray.includes(inputs.mood));

    router.push("/journal");
  }

  console.log(everymoodarr.includes("neutral"));

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

export async function getServerSideProps(context) {
  const { data, error } = await supabase.from("moods").select();

  const array = data.map((mood) => {
    return {
      mood: mood.mood,
      count: mood.count,
    };
  });

  const user = (await supabase.auth.api.getUserByCookie(context.req)) || [];

  if (!user.user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  return {
    props: {
      moods: array,
      user: user.user,
    },
  };
}

export default Upload;

import { useState, useEffect } from "react";

import { supabase } from "../../utils/supabaseClient";

export async function getStaticProps() {
  const { data, error } = await supabase.from("moods").select();

  return {
    props: {
      moods: data,
    },
  };
}

function MoodCollection(props) {
  const [moodArray, setMoodArray] = useState();

  useEffect(() => {
    const moods = props.moods;
    const getMoodsArray = moods.map((mood) => mood.mood);

    setMoodArray(getMoodsArray);
  }, [props.moods]);
  console.log(moodArray);
  return [moodArray];
}

export default MoodCollection;

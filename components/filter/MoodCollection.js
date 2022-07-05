import { useState, useEffect } from "react";

import { supabase } from "../../utils/supabaseClient";

/* export async function getStaticProps() {
  const { data, error } = await supabase.from("moods").select();

  return {
    props: {
      moods: data,
    },
  };
} */

function MoodCollection() {
  const [moodArray, setMoodArray] = useState([]);

  useEffect(() => {
    async function getMoods() {
      const { data, error } = await supabase
        .from("moods")
        .select()
        .then((data) => {
          return data;
        });

      const getArray = data.map((element) => element.mood);

      setMoodArray(getArray);
    }
    getMoods();
  }, []);

  return [moodArray];
}

export default MoodCollection;

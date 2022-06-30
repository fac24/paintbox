import { useState, useEffect } from "react";

import { supabase } from "../../utils/supabaseClient";

function MoodCount(mood, object) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    object.filter((obj) => {
      if (obj.mood == mood) {
        setCount(obj.count);
        return obj.count;
      }
    });
  }, [mood, object]);

  return [count];
}

export default MoodCount;

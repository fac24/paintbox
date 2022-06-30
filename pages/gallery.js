import { useEffect } from "react";

import MoodCollection from "../components/filter/MoodCollection";

import { supabase } from "../utils/supabaseClient";

function Gallery(props) {
  const array = MoodCollection();

  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

export default Gallery;

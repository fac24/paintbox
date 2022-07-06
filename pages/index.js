import { useState } from "react";

import Affirmation from "../components/affirmation/Affirmation";
import SelectArts from "../components/art-posts/SelectArts";
import PromptWord from "../components/prompt/PromptWord";

import { supabase } from "../utils/supabaseClient";

function Home(props) {
  const [sessionId, setSessionId] = useState(supabase.auth.session() || "");
  const allArts = props.arts || [];

  return (
    <div>
      <section>
        <PromptWord />
      </section>
      <SelectArts arts={allArts} />
      <section>
        <Affirmation />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const arts = await supabase.from("arts").select().eq("public", "true");

  const user = (await supabase.auth.api.getUserByCookie(context.req)) || [];

  if (!user.user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  return {
    props: {
      user: user.user,
      arts: arts.data,
    },
  };
}
export default Home;

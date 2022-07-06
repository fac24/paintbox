import { useState } from "react";

import Affirmation from "../components/affirmation/Affirmation";
import PromptWord from "../components/prompt/PromptWord";

import { supabase } from "../utils/supabaseClient";

function Home() {
  const [sessionId, setSessionId] = useState(supabase.auth.session() || "");

  return (
    <div>
      <section>
        <PromptWord />
      </section>
      <section>
        <Affirmation />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = (await supabase.auth.api.getUserByCookie(context.req)) || [];

  if (!user.user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  return {
    props: {
      user: user.user,
    },
  };
}
export default Home;

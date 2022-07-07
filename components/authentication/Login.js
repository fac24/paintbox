import { useState } from "react";

import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: mail,
      password: pass,
    });
    router.push("/");
    error ? console.log(error) : console.log(user);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter your email..."
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a password..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button onClick={signIn}>Login</button>
      </form>
    </div>
  );
}

export default Login;

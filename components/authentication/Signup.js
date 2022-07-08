import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

function Signup() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const signUp = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: mail,
      password: pass,
    });

    error ? console.log(error) : console.log(user);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p>Signup</p>
      <input
        type="text"
        name="emailinput"
        placeholder="Enter your email..."
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        name="passwordinput"
        placeholder="Enter a pasword..."
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={signUp}>Sign Up</button>
    </form>
  );
}

export default Signup;

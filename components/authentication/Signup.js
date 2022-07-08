import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";

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
      <div className="logininputs">
        <AiOutlineMail className="logicons" />
        <input
          type="text"
          name="emailinput"
          placeholder="Enter your email..."
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="logininputs">
        <AiOutlineKey className="logicons" />
        <input
          type="password"
          name="passwordinput"
          placeholder="Enter a pasword..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <button onClick={signUp} className="login_button">
        SIGN UP
      </button>
    </form>
  );
}

export default Signup;

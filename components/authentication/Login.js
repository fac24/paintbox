import { useState } from "react";

import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";

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
    <div className="login_form">
      <h2 className="login_h2">Log in with email and password</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="logininputs">
          <AiOutlineMail className="logicons" />
          <input
            type="text"
            placeholder="Enter your email..."
            name="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <br></br>
        <div className="logininputs">
          <AiOutlineKey className="logicons" />
          <input
            type="password"
            placeholder="Enter a pasword..."
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <br></br>
        <button id="login-btn" className="login_button" onClick={signIn}>
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default Login;

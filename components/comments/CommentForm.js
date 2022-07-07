import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";

function CommentForm(props) {
  const router = useRouter();

  const messageInput = useRef();

  console.log(props.artid);

  async function submitHandler(event) {
    event.preventDefault();

    const enteredMessage = messageInput.current.value;

    console.log(typeof props.userid);
    console.log(typeof enteredMessage);
    console.log(typeof props.artid);

    const { data, error } = await supabase
      .from("comments")
      .insert({
        user_id: "a8bec8be-b4cb-49e2-99d7-5f4e13c6512c",
        art_id: 7,
        content: "bhgvhg",
      })
      .then((data) => {
        return data;
      });

    // router.push(`/posts/${props.artid}`);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          rows="6"
          id="message"
          name="message"
          ref={messageInput}
          required
        />
      </div>

      <button>Submit</button>
    </form>
  );
}

export default CommentForm;

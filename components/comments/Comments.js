import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../utils/supabaseClient";

function AddComment(props) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const onChange = (event) => {
    const commentValue = event.target.value;
    setComment(commentValue);
  };

  async function handleSubmit() {
    const { data, error } = await supabase.from("comments").insert({
      user_id: props.userid,
      art_id: props.artid,
      content: comment,
      username: props.useremail,
    });

    if (!error && data) {
      router.push(`/posts/${props.artid}`);
    } else {
      window.alert(error?.message);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={onChange}
          id="comment"
          name="comment"
          placeholder="Write you comment..."
          rows="6"
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default AddComment;

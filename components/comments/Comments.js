import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

function AddComment() {
  const [comment, setComment] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [commentList, setCommentList] = useState([]);

  const onChange = (event) => {
    const commentValue = event.target.value;
    setComment(commentValue);
  };

  async function handleSubmit() {
    // event.preventDefault();
    setIsSending(true);
    // inserting comment into database
    const { data, error } = await supabase
      .from("comments")
      .insert({
        user_id: "a8bec8be-b4cb-49e2-99d7-5f4e13c6512c",
        content: comment,
      })
      .then((data) => {
        return data;
      });

    if (!error && data) {
      // If succeed
      window.alert("Hooray!");
    } else {
      // If failed
      window.alert(error?.message);
    }
  }
  // selecting comment from database
  async function getCommentList() {
    // event.preventDefault();

    const { data, error } = await supabase
      .from("comments")
      .select(`content`)
      .then((data) => {
        return data;
      });

    if (!error && data) {
      setCommentList(data);
    } else {
      setCommentList([]);
    }
  }

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={onChange}
          name="comment"
          placeholder="Your Comment"
          rows="5"
        />
        <input
          type="submit"
          disabled={isSending}
          value={isSending ? "Sending Comment..." : "Send Comment"}
        />
      </form>
      <div>
        {commentList.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddComment;

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

function CommentList(props) {
  const [artComments, setArtComments] = useState([]);

  async function getCommentList() {
    const { data, error } = await supabase
      .from("comments")
      .select()
      .eq("art_id", props.artid)
      .then((data) => {
        return data;
      });

    if (!error && data) {
      setArtComments(data);
    } else {
      setArtComments([]);
    }
  }

  useEffect(() => {
    getCommentList();
  }, []);

  console.log(artComments);

  return (
    <ul>
      {artComments.map((comment) => {
        const date = new Date(comment.inserted_at).toLocaleString();
        return (
          <li key={comment.id}>
            <p>Username: {comment.username}</p>
            <p>{comment.content}</p>
            <p>{date}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;

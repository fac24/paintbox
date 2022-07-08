import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CommentList from "../../components/comments/CommentList";
import AddComment from "../../components/comments/Comments";

import ArtUploadImage from "../../components/styled-components/ArtUploadImage";
import { supabase } from "../../utils/supabaseClient";

function Post(props) {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUserId(props.userId);
    setUserEmail(props.userEmail);
  }, [props.userEmail, props.userId]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2>Art Post</h2>
      <div>
        <h3>{props.post[0].mood}</h3>
        <p>{props.post[0].date}</p>
        <ArtUploadImage src={props.post[0].img} alt={props.post[0].alt} />
        <p>{props.post[0].caption}</p>
      </div>
      {/*  <CommentForm artid={props.post[0].id} userid={props.userSession} /> */}
      <AddComment
        artid={props.post[0].id}
        userid={userId}
        useremail={userEmail}
      />
      <CommentList artid={props.post[0].id} />
    </section>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("arts").select();
  const posts = data ? data : [1];

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { data, error } = await supabase
    .from("arts")
    .select()
    .eq("id", context.params.id);

  return { props: { post: data } };
}

export default Post;

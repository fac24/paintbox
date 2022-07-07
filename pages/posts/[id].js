import { useRouter } from "next/router";
import { useState } from "react";
import ArtUploadImage from "../../components/styled-components/ArtUploadImage";
import { supabase } from "../../utils/supabaseClient";
import CommentForm from "../../components/comments/CommentForm";

function Post(props) {
  const [sessionId, setSessionId] = useState(supabase.auth.session());
  const router = useRouter();

  console.log(props.userSession);

  return (
    <section>
      <h2>Art Post</h2>
      <div>
        <h3>{props.post[0].mood}</h3>
        <p>{props.post[0].date}</p>
        <ArtUploadImage src={props.post[0].img} alt={props.post[0].alt} />
        <p>{props.post[0].caption}</p>
      </div>
      <CommentForm artid={props.post[0].id} userid={props.userSession} />
    </section>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("arts").select();
  const posts = await data;

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

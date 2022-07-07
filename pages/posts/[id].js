import { useRouter } from "next/router";
import ArtUploadImage from "../../components/styled-components/ArtUploadImage";

import { supabase } from "../../utils/supabaseClient";

function Post(props) {
  const router = useRouter();

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

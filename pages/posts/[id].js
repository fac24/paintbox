import { useRouter } from "next/router";

import { supabase } from "../../utils/supabaseClient";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2>Art Post</h2>
      <div>
        <h3>{post[0].mood}</h3>
        <p>{post[0].date}</p>
        <img src={post[0].img} alt={post[0].alt} />
        <p>{post[0].caption}</p>
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

export async function getStaticProps({ params }) {
  const { data, error } = await supabase
    .from("arts")
    .select()
    .eq("id", params.id);
  const post = await data;

  return { props: { post } };
}

export default Post;

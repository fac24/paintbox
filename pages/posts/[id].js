import { useRouter } from "next/router";
import ArtUploadImage from "../../components/styled-components/ArtUploadImage";
import MoodPost from "../../components/styled-components/MoodPost";
import WholeJournalToTheRainbowTitle from "../../components/styled-components/WholeJournalToTheRainbowTitle";
import RainbowBorder from "../../components/styled-components/RainbowBorder";
import { supabase } from "../../utils/supabaseClient";

function Post(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <WholeJournalToTheRainbowTitle>Art Post</WholeJournalToTheRainbowTitle>
      <RainbowBorder>
        <MoodPost>
          <h3>{post[0].mood}</h3>
          <p>{post[0].date}</p>
          <ArtUploadImage src={post[0].img} alt={post[0].alt} />
          <p>{post[0].caption}</p>
        </MoodPost>
      </RainbowBorder>
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

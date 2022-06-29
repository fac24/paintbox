import { useRouter } from "next/router";

function Post() {
  const router = useRouter();

  const id = router.query.id;

  //Fetch post from database with id

  return <h1>Art Post</h1>;
}

export default Post;

import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";

function DeletePost(props) {
  const router = useRouter();

  async function handleDelete() {
    const { data, error } = await supabase
      .from("arts")
      .delete()
      .match({ id: props.id });

    router.push("/journal");
  }

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeletePost;

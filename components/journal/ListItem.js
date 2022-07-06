import { useState } from "react";
import { useRouter } from "next/router";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";

function ListItem(props) {
  const [visibility, setVisibility] = useState(false);

  const router = useRouter();

  const date = new Date(props.inserted_at).toLocaleString();

  function toggleOptionsVisibility() {
    setVisibility(!visibility);
  }

  return (
    <li key={props.id}>
      <h3>Mood: {props.mood}</h3>
      <p>{date.slice(0, 17)}</p>
      <button onClick={toggleOptionsVisibility}>...</button>
      {visibility ? (
        <div>
          <DeletePost id={props.id} />
          <UpdatePost id={props.id} />
        </div>
      ) : null}
      <img src={props.img} alt={props.alt} />
      <p>Username: {props.email}</p>
      <p>{props.caption}</p>
      <button onClick={() => router.push(props.href)}>Open...</button>
    </li>
  );
}

export default ListItem;

import { useRouter } from "next/router";
import { useState } from "react";

function ListItem(props) {
  const [visibility, setVisibility] = useState(true);
  const router = useRouter();

  const date = new Date(props.inserted_at).toLocaleString();

  function toggleVisibility() {
    setVisibility(!visibility);
  }
  return visibility ? (
    <li key={props.id}>
      <h3>Mood: {props.mood}</h3>
      <p>{date.slice(0, 10)}</p>
      <button onClick={toggleVisibility}>Hide post</button>
      <img src={props.img} alt={props.alt} />
      <p>Username: {props.email}</p>
      <p>{props.caption}</p>
      <button onClick={() => router.push(props.href)}>Open...</button>
    </li>
  ) : (
    <button onClick={toggleVisibility}>Show post again</button>
  );
}

export default ListItem;

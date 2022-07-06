import { useRouter } from "next/router";
import { useState } from "react";

function ListItem(props) {
  const [visibility, setVisibility] = useState(true);
  const router = useRouter();

  function toggleVisibility() {
    setVisibility(!visibility);
    console.log(visibility);
  }
  return visibility ? (
    <li key={props.id}>
      <h3>Mood: {props.mood}</h3>
      <p>{props.inserted_at}</p>
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

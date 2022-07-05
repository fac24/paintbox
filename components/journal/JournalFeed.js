import { useRouter } from "next/router";
import ArtUploadImage from "../styled-components/ArtUploadImage"

function JournalFeed(props) {
  const router = useRouter();

  const allArts = props.arts;

  return (
    <ul>
      {allArts.map((art) => {
        const href = `/posts/${art.id}`;
        return (
          <li key={art.id}>
            <h3>{art.mood}</h3>
            <p>{art.date}</p>
            <ArtUploadImage src={art.img} alt={art.alt} />
            <p>{art.caption}</p>
            <button onClick={() => router.push(href)}>Open...</button>
          </li>
        );
      })}
    </ul>

  );
}

export default JournalFeed;

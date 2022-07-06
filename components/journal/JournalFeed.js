import { useRouter } from "next/router";
import ArtUploadImage from "../styled-components/ArtUploadImage";
import ListItem from "./ListItem";

function JournalFeed(props) {
  const router = useRouter();

  const allArts = props.arts || [];

  console.log(allArts);

  return (
    <ul>
      {allArts.map((art) => {
        const href = `/posts/${art.id}`;
        return (
          <ListItem
            key={art.id}
            id={art.id}
            mood={art.mood}
            inserted_at={art.inserted_at}
            img={art.img}
            alt={art.alt}
            email={art.email}
            caption={art.caption}
            href={href}
          />
        );
      })}
    </ul>
  );
}

export default JournalFeed;

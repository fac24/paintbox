import { useRouter } from "next/router";
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

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1rem;
//   margin: 1rem;
//   padding: 0.25em 1rem;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// render(
//   <div>
//     <Button primary>Primary</Button>
//   </div>
// );

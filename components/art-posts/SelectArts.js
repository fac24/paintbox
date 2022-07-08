import ListItem from "./ListItem";

function SelectArts(props) {
  return (
    <ul>
      {props.arts.map((art) => {
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
            prompt={art.prompt}
          />
        );
      })}
    </ul>
  );
}

export default SelectArts;

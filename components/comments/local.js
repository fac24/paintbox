import { useState, useEffect } from "react";

export default function useLocalArray(key) {
  const [localStore, setLocalStore] = useState();

  useEffect(() => {
    const local = localStorage.getItem(key);
    const positonId = local.search("id");
    const slice = local.slice(positonId + 4, positonId + 42);

    //const localObj = local.split(",,").map((string) => JSON.parse(string));

    setLocalStore(slice);
  }, [key]);

  return [localStore];
}

/* // export function jsonParser(blob) {
  let parsed = JSON.parse(blob);
  if (typeof parsed === 'string') parsed = jsonParser(parsed);
  return parsed;
}
 */

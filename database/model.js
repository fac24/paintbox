import db from "./connection";

async function addArt(mood, alt, caption, pub, prompt, img) {
  const INSERT_POST = `
      INSERT INTO arts (
        mood, 
        alt,
        caption,
        public,
        prompt ,
        img) 
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
  const addedArt = await db.query(INSERT_POST, [
    mood,
    alt,
    caption,
    pub,
    prompt,
    img,
  ]);
  return addedArt.rows[0];
}

export { addArt };

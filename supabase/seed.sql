BEGIN;

DROP TABLE IF EXISTS users, arts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL
);

CREATE TABLE arts (
    id SERIAL PRIMARY KEY, 
    mood TEXT NOT NULL, 
    alt TEXT NOT NULL,
    caption TEXT NOT NULL,
    public BOOLEAN,
    prompt BOOLEAN,
    img TEXT NOT NULL
    );

INSERT INTO users (email, username) VALUES (
    '1@1.1',
    'ArtistNr1'

);

INSERT INTO arts (mood, alt, caption, public, prompt, img) VALUES (
    'Sad',
    'alttext',
    'Im sad',
    TRUE,
    FALSE,
    '\x123456'
);

COMMIT;
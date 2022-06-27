BEGIN;


DROP TABLE IF EXISTS users CASCADE;



CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (email, username, password) VALUES (
    '1@1.1',
    'ArtistNr1'
    '123'
);


COMMIT;
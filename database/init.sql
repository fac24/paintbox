BEGIN;


DROP TABLE IF EXISTS users, posts CASCADE;



CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    -- password TEXT NOT NULL
);


CREATE TABLE posts (
 mood TEXT NOT NULL 
);

-- how do we show the posts table?



INSERT INTO users (email, username) VALUES (
    '1@1.1',
    'ArtistNr1'
    -- '123'
);


INSERT INTO posts (mood) VALUES 
('happy');




COMMIT;
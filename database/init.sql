BEGIN;

DROP TABLE IF EXISTS users, posts, sessions CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    profile_visibility BOOLEAN
);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
    mood TEXT NOT NULL,
    alt_text TEXT NOT NULL,
    description TEXT,
    image BYTEA,
    public BOOLEAN,
    promt BOOLEAN,
);


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    comment TEXT
);


CREATE TABLE sessions (
    sid CHAR(24) UNIQUE NOT NULL PRIMARY KEY,
    data JSON NOT NULL
);



INSERT INTO users (username, email) VALUES (
    'testuser',
    'user@test.try'
);


COMMIT;
BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (username, email) VALUES (
    'testuser',
    'user@test.try'
);

COMMIT;
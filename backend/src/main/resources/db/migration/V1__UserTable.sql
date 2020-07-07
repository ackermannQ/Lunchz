CREATE TABLE usertable (
    id UUID NOT NULL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    userType VARCHAR(100) NOT NULL
);
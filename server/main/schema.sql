-- set transaction read write; 

CREATE TABLE recipes ( 
    _id SERIAL PRIMARY KEY, 
    type VARCHAR ( 50 ) NOT NULL,
    name VARCHAR ( 255 ) NOT NULL, 
    products VARCHAR NOT NULL, 
    description VARCHAR NOT NULL, 
    imageurl VARCHAR NOT NULL,
    author VARCHAR ( 255 ),
    likes INT NOT NULL,
    date_created TIMESTAMP 
  );
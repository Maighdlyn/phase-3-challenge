DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS orders;

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  section TEXT
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  customer_name TEXT
);

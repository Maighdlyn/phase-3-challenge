DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  section TEXT
);

CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  shopper_id TEXT NOT NULL,
  order_date date DEFAULT CURRENT_DATE
);

CREATE TABLE items_ordered(
  id SERIAL PRIMARY KEY,
  order_number INT,
  item_id INT,
  quantity INT
)

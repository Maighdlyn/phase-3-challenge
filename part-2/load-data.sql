\c grocery_store
COPY items (name, price, section)
FROM '/Users/emmabrown/Desktop/LGProjects/phase-3/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;


INSERT INTO shoppers (name, email)
VALUES ('Nymeria', 'wolf@email.com'),
  ('Ghost', 'howl@email.com'),
  ('Lady', 'fur@email.com'),
  ('Summer', 'psychic@email.com'),
  ('ShaggyDog', 'bites@email.com'),
  ('GreyWind', 'decapitation@email.com');

INSERT INTO orders (shopper_id)
VALUES (1), (4), (3), (3), (2), (1), (1), (1), (2), (5), (6), (6), (1), (2), (3);

INSERT INTO items_ordered (order_number, item_id)
VALUES (1, 5), (1, 5), (1, 12), (2, 39), (3, 32), (4, 22), (5, 7), (6, 23), (7, 8), (8, 11), (9, 12), (10, 10), (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (15, 16), (15, 17), (15, 18);

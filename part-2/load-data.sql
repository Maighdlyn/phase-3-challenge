\c grocery_store
COPY items (name, price, section)
FROM '/Users/emmabrown/Desktop/LGProjects/phase-3/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;


INSERT INTO shoppers (name, email)
VALUES ('Nymeria', 'wolf@email.com'),
  ('Ghost', 'howl@email.com'),
  ('Lady', 'fur@email.com'),
  ('Summer' 'psychic@email.com'),
  ('ShaggyDog', 'bites@email.com'),
  ('GreyWind', 'decapitation@email.com');

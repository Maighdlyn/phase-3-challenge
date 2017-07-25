\c grocery_store
COPY items (name, price, section)
FROM '/Users/emmabrown/Desktop/LGProjects/phase-3/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

-- Note: The path used above is on my local machine. To use this file on your machine, please replace the path with your local path

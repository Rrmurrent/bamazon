-- Drops the bmazon_DB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "bmazon_db;" database --
CREATE DATABASE bamazonDB;

-- Makes it so all of the following code will affect bmazon_db --
USE bamazonDB;

-- Creates the table "people" within bmazon_db; --
CREATE TABLE products (
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(50) NOT NULL,
  -- Makes a column called "product_id" which cannot contain null --
  item_id INT NOT NULL AUTO_INCREMENT,
  -- Makes a sting column called "department_name" --
  department_name VARCHAR(50) NOT NULL,
  -- Makes an numeric column called "price" --
  price DECIMAL(10,2) NOT NULL,
  -- Makes a numeric colimn called "stock_quantity" --
  stock_quantity INT NOT NULL,
  -- Creates the primary key that keeps the info in DB separate
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
-- Dumb Bells--
 VALUES
   ("Dumb Bell 2.5lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 5lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 10lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 12.5lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 15lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 20lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 25lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 30lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 35lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 40lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 45lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 50lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 55lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 60lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 65lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 70lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 75lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 80lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 85lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 90lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 95lb", "Health and Fitness", 10.99, 1000),
   ("Dumb Bell 100lb", "Health and Fitness", 10.99, 1000),
-- Exercise Bands --
   ("Exercise Bands 2.5lb", "Health and Fitness", 10.99, 1000),
   ("Exercise Bands 5lb", "Health and Fitness", 10.99, 1000),
   ("Exercise Bands 10lb", "Health and Fitness", 10.99, 1000),
   ("Exercise Bands 12.5lb", "Health and Fitness", 10.99, 1000),
-- Nutritionals--
   ("Vitamin A capsules", "Health and Beauty", 10.99, 1000),
   ("Vitamin C capsules", "Health and Beauty", 10.99, 1000),
   ("Omega 3 fish oil capsules", "Health and Beauty", 10.99, 1000),
   ("Magnesium pills", "Health and Beauty", 10.99, 1000),
   ("Complete Multi-vitamin", "Health and Beauty", 10.99, 1000),
   ("Multi-Vitmain Gummy Bears--For Kids!", "Health and Beauty", 10.99, 1000),
   ("Vitamin A capsules", "Health and Beauty", 10.99, 1000),
   ("Biotin capsules", "Health and Beauty", 10.99, 1000),
   ("Vitamin C capsules", "Health and Beauty", 10.99, 1000),
   ("Co-Q 10 capsules-90 servings", "Health and Beauty", 96.99, 1000),
   ("Cal-Mag", "Health and Beauty", 12.99, 1000),
   ("Folic Acid", "Health and Beauty", 10.99, 1000),
   ("COD Liver Oil", "Health and Beauty", 17.99, 1000),
   ("Chelated Iron capsules", "Health and Beauty", 10.99, 1000);

SELECT * FROM products;
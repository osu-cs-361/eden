CREATE TABLE Plant (
    id INT PRIMARY KEY AUTO_INCREMENT,
    owner_id INT,
    image_link VARCHAR(255),
    species VARCHAR(255),
    subtitle VARCHAR(255),
    notes TEXT,
    watering_interval INT,
    last_watered DATE,
    FOREIGN KEY (owner_id) REFERENCES User (id)
);
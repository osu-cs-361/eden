INSERT INTO User (email, password, token)
VALUES
    ("test1@test.email", "password123", "token01"),
    ("test2@test.email", "supersecretpassword", "token02");

INSERT INTO Plant (owner_id, image_link, species, subtitle, notes, watering_interval, last_watered)
VALUES
    (
        (SELECT id FROM User WHERE email="test1@test.email"),
        NULL,
        "Bromeliad",
        "Beautiful Pink Guy",
        "Turn every few days to prevent leaning",
        7,
        CURRENT_DATE
    );
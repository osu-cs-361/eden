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
        "Beautiful Pink Central Flower",
        "Turn every few days to prevent leaning",
        6,
        CURRENT_DATE
    ),
    (
        (SELECT id FROM User WHERE email="test1@test.email"),
        NULL,
        "White Bird of Paradise",
        "Banana-like Medium Height Bush",
        "Requires direct sunlight",
        4,
        CURRENT_DATE
    ),
    (
        (SELECT id FROM User WHERE email="test2@test.email"),
        NULL,
        "Philodendron Brasil",
        "Hanging Potted Plant",
        "Fertilize when leaves turn excessively yellow",
        7,
        CURRENT_DATE
    ),
    (
        (SELECT id FROM User WHERE email="test2@test.email"),
        NULL,
        "Zanzibar Gem",
        "Vertically Growing Leafy Plant",
        "Trim horizontal offshoots to prevent bushiness",
        7,
        CURRENT_DATE
    );
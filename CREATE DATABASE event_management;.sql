CREATE DATABASE event_management;
USE event_management;

-- Table for storing user details
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',  -- Changed ENUM to VARCHAR
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP  -- Changed TIMESTAMP to DATETIME
);

-- Table for storing event details
CREATE TABLE events (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATETIME,
    location VARCHAR(255),
    ticket_price DECIMAL(10,2) DEFAULT 0.00,
    privacy VARCHAR(50) DEFAULT 'public',  -- Changed ENUM to VARCHAR
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Changed TIMESTAMP to DATETIME
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table for storing ticket purchases (registrations)
CREATE TABLE registrations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    event_id INT,
    user_id INT,
    ticket_type VARCHAR(50) DEFAULT 'general',  -- Changed ENUM to VARCHAR
    status VARCHAR(50) DEFAULT 'pending',  -- Changed ENUM to VARCHAR
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Changed TIMESTAMP to DATETIME
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP DATABASE IF EXISTS calendar;
DROP USER IF EXISTS calendar;
CREATE DATABASE calendar CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER calendar IDENTIFIED BY 'test1234';
GRANT ALL PRIVILEGES ON calendar.* TO calendar;
FLUSH PRIVILEGES;

USE calendar;

CREATE TABLE appointments (
    id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    start_time TIME,
    location VARCHAR(200) NOT NULL,
    region VARCHAR(200) NOT NULL,
    tasks TEXT,
    domain VARCHAR(200),
    access ENUM('FREE','REGISTRATION','APPLICATION'),
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    INDEX index_name (name)
);

CREATE TABLE participants (
    id BIGINT NOT NULL AUTO_INCREMENT,
    appointment_id BIGINT NOT NULL,
    user_id VARCHAR(50),
    name VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    INDEX index_name (name),
    CONSTRAINT foreign_key_appointment_id
        FOREIGN KEY (appointment_id) REFERENCES appointments (id)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
);
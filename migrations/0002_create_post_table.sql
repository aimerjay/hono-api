-- Migration: Create post table
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    institution TEXT NOT NULL,
    course TEXT NOT NULL,
    date_grad DATE,
    testimony TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

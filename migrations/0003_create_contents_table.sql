-- Migration: Create contents table
CREATE TABLE IF NOT EXISTS contents (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    institution TEXT NOT NULL,
    course TEXT NOT NULL,
    date_grad DATE,
    testimony TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

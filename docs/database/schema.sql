-- СХЕМА БАЗЫ ДАННЫХ (SQLITE) ПО ER-ДИАГРАММЕ
PRAGMA foreign_keys = ON;

CREATE TABLE users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    family_role TEXT
);

CREATE TABLE tasks (
    taskID INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    due_date TEXT,
    is_done BOOLEAN DEFAULT 0,
    priority TEXT DEFAULT 'medium' CHECK(priority IN ('low', 'medium', 'high')),
    periodic TEXT,
    author INTEGER,
    FOREIGN KEY (author) REFERENCES users(userID) ON DELETE CASCADE
);

CREATE TABLE categories (
    categoryID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE task_categories (
    taskID INTEGER,
    categoryID INTEGER,
    PRIMARY KEY (taskID, categoryID),
    FOREIGN KEY (taskID) REFERENCES tasks(taskID) ON DELETE CASCADE,
    FOREIGN KEY (categoryID) REFERENCES categories(categoryID) ON DELETE CASCADE
);

CREATE TABLE locations (
    locationID INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE task_locations (
    taskID INTEGER,
    locationID INTEGER,
    PRIMARY KEY (taskID, locationID),
    FOREIGN KEY (taskID) REFERENCES tasks(taskID) ON DELETE CASCADE,
    FOREIGN KEY (locationID) REFERENCES locations(locationID) ON DELETE CASCADE
);

-- Индексы для оптимизации запросов
CREATE INDEX idx_tasks_author ON tasks(author);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_is_done ON tasks(is_done);

-- Тестовые данные
INSERT INTO users (username, email, family_role) VALUES 
('alex_ivanov', 'alex@example.com', 'father'), 
('maria_petrova', 'maria@example.com', 'mother');

INSERT INTO categories (name, description) VALUES 
('Работа', 'Рабочие задачи'), 
('Дом', 'Домашние дела');

INSERT INTO locations (name, description) VALUES 
('Офис', 'Рабочее место'), 
('Супермаркет', 'Покупка продуктов');

INSERT INTO tasks (title, description, due_date, is_done, priority, periodic, author) VALUES 
('Завершить отчет', 'Квартальный отчет', '2024-12-20', 0, 'high', 'none', 1),
('Купить продукты', 'Молоко, хлеб, яйца', '2024-12-15', 0, 'medium', 'weekly', 2);

-- Связи задач с категориями и локациями
INSERT INTO task_categories (taskID, categoryID) VALUES (1, 1), (2, 2);
INSERT INTO task_locations (taskID, locationID) VALUES (1, 1), (2, 2);

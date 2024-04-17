/* TABLES */
-- Create boards table 
CREATE TABLE IF NOT EXISTS boards (
  id INT AUTO_INCREMENT PRIMARY KEY
);

-- Create icons table
CREATE TABLE IF NOT EXISTS icons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  value VARCHAR(255)
);

-- Create status_task table
CREATE TABLE IF NOT EXISTS status_task (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code INT,
  name VARCHAR(255)
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  status_id INT,
  board_id INT,
  icon_id INT,
  FOREIGN KEY (status_id) REFERENCES status_task(id),
  FOREIGN KEY (board_id) REFERENCES boards(id),
  FOREIGN KEY (icon_id) REFERENCES icons(id)
);


/* DATA */

/*Default board*/
INSERT INTO boards (id) VALUES (1);

/*Icons */
INSERT INTO icons  (value) VALUES ('💻️');
INSERT INTO icons  (value) VALUES ('💬');
INSERT INTO icons  (value) VALUES ('☕️');
INSERT INTO icons  (value) VALUES ('💪');
INSERT INTO icons  (value) VALUES ('📚️');
INSERT INTO icons  (value) VALUES ('⏱️');


/*Status task*/
INSERT INTO status_task (code,name) VALUES (0,'In Progress');
INSERT INTO status_task (code,name) VALUES (1,'Completed');
INSERT INTO status_task (code,name) VALUES (2,'Won''t Do');
INSERT INTO status_task (code,name) VALUES (3,'Default');


/*Tasks*/
INSERT INTO tasks (name,description,status_id,board_id,icon_id) VALUES ('Task in Progress','',0,1,6);
INSERT INTO tasks (name,description,status_id,board_id,icon_id) VALUES ('Task Completed','',1,1,4);
INSERT INTO tasks (name,description,status_id,board_id,icon_id) VALUES ('Task Won’t Do','',2,1,3);
INSERT INTO tasks (name,description,status_id,board_id,icon_id) VALUES ('Task To Do','Work on a Challenge on devChanllenge.io,learn Typescript',3,1,5);





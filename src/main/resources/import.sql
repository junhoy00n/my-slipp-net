INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL) VALUES (1, 'test', 'pass', 'test1', 'test@gmail.com');
INSERT INTO USER (ID, USER_ID, PASSWORD, NAME, EMAIL) VALUES (2, 'test2', 'pass', 'test2', 'test2@gmail.com');

INSERT INTO QUESTION (id, writer_id, title, contents, create_date, count_of_answer) VALUES(1, 1, 'test1', 'tet1', CURRENT_TIMESTAMP(), 0);
INSERT INTO QUESTION (id, writer_id, title, contents, create_date, count_of_answer) VALUES(2, 2, 'test2', 'tet2', CURRENT_TIMESTAMP(), 0);
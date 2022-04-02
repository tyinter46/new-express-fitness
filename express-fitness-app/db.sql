CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100), 
  phone VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL
);

CREATE TABLE contacts (
    contact_id uuid DEFAULT uuid_generate_v4 (),
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    PRIMARY KEY (contact_id)
);
CREATE TABLE marks (
  id SERIAL PRIMARY KEY,
  student_id INT NOT NULL,
  mark INT NOT NULL,
  subject VARCHAR(255) NOT NULL
);
use delivery_licoreria;

create table users(
 id BIGINT PRIMARY KEY AUTO_INCREMENT,
 email VARCHAR(100) NOT NULL UNIQUE,
 name VARCHAR (90) NOT NULL,
 lastname VARCHAR (90) NOT NULL,
 phone VARCHAR (90) NOT NULL UNIQUE,
 image VARCHAR (255) NULL,
 password VARCHAR (90) NOT NULL,
 created_at TIMESTAMP (0) NOT NULL,
 updated_at TIMESTAMP (0) NOT NULL
 );

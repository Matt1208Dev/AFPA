DROP DATABASE IF EXISTS entreprise;

CREATE DATABASE entreprise CHARACTER SET 'utf8';

USE entreprise;

CREATE TABLE client(
    cli_num INT AUTO_INCREMENT,
    cli_nom VARCHAR(50) NOT NULL,
    cli_adresse VARCHAR(50) NOT NULL,
    cli_tel VARCHAR(30),
    PRIMARY KEY(cli_num),
    INDEX ind_cli_nom (cli_nom)
)
ENGINE = INNODB;

CREATE TABLE produit(
    pro_num INT UNSIGNED,
    pro_libelle VARCHAR(50) NOT NULL,
    pro_description VARCHAR(50) NOT NULL,
    PRIMARY KEY(pro_num)
)
ENGINE = INNODB;

CREATE TABLE commande(
    com_num INT AUTO_INCREMENT,
    cli_num INT,
    com_date DATETIME NOT NULL,
    com_obs VARCHAR(50),
    PRIMARY KEY(com_num),
    CONSTRAINT fk3 FOREIGN KEY(cli_num) REFERENCES client(cli_num)
)
ENGINE = INNODB;

CREATE TABLE est_compose(
    com_num INT,
    pro_num INT UNSIGNED,
    est_qte INT UNSIGNED NOT NULL,
    CONSTRAINT fk1 FOREIGN KEY(com_num) REFERENCES commande(com_num),
    CONSTRAINT fk2 FOREIGN KEY(pro_num) REFERENCES produit(pro_num)
)
ENGINE = INNODB;



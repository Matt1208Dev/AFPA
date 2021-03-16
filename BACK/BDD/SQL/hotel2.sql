DROP DATABASE IF EXISTS hotel2;

CREATE DATABASE hotel2 CHARACTER SET "utf8";

USE hotel2;

CREATE TABLE hotel (
    capacite_hotel int(3) NOT NULL,
    categorie_hotel int(1) NOT NULL,
    nom_hotel varchar(50) NOT NULL,
    adresse_hotel varchar(100) NOT NULL,
    num_hotel int(3) NOT NULL AUTO_INCREMENT,
    num_station int(3) NOT NULL,
    CONSTRAINT hotel_PK PRIMARY KEY(num_hotel)
) ENGINE=INNODB;

CREATE TABLE chambre (
    capacite_chambre int(2) NOT NULL,
    degre_confort_chambre int(2) NOT NULL,
    exposition_chambre char(2) NOT NULL,
    type_chambre varchar(20) NOT NULL,
    num_chambre int(3) NOT NULL AUTO_INCREMENT,
    num_hotel int(3) NOT NULL,
    CONSTRAINT chambre_PK PRIMARY KEY(num_chambre)
) ENGINE=INNODB;

CREATE TABLE reservation (
    num_reservation int(6) NOT NULL AUTO_INCREMENT,
    num_chambre int(3) NOT NULL,
    num_client int(6) NOT NULL,
    date_debut_reservation date NOT NULL,
    date_fin_reservation date NOT NULL,
    montant_arrhes_reservation int(3) NOT NULL,
    prix_total_reservation int(3) NOT NULL,
    CONSTRAINT reservation_PK PRIMARY KEY(num_reservation)
) ENGINE=INNODB;

CREATE TABLE client (
    adresse_client varchar(100) NOT NULL,
    nom_client varchar(30) NOT NULL,
    prenom_client varchar(30) NOT NULL,
    num_client int(6) NOT NULL AUTO_INCREMENT,
    CONSTRAINT client_PK PRIMARY KEY(num_client)
) ENGINE=INNODB;

CREATE TABLE station (
    num_station int(3) NOT NULL AUTO_INCREMENT,
    nom_station varchar(50),
    CONSTRAINT station_PK PRIMARY KEY(num_station)
) ENGINE=INNODB;
 
 ALTER TABLE hotel
 ADD CONSTRAINT FOREIGN KEY (num_station) REFERENCES station(num_station);
 ALTER TABLE reservation
 ADD CONSTRAINT FOREIGN KEY (num_chambre) REFERENCES chambre(num_chambre),
 ADD CONSTRAINT FOREIGN KEY (num_client) REFERENCES client(num_client);
 ALTER TABLE chambre
 ADD CONSTRAINT FOREIGN KEY (num_hotel) REFERENCES hotel(num_hotel)
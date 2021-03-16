-- CREATION DE L UTILISATEUR util1

CREATE USER 'util1'@'%' IDENTIFIED BY 'password1';

GRANT ALL PRIVILEGIES
ON `hotel2`.*
TO 'util1'@'%' 
IDENTIFIED BY 'password1';

-- CREATION DE L UTILISATEUR util2

CREATE USER "util2"@"%" IDENTIFIED BY "password2";

GRANT SELECT
ON `hotel2`.*
TO "util2"@"%"
IDENTIFIED BY "password2";

-- CREATION DE L UTILISATEUR util3

CREATE USER "util3"@"%" IDENTIFIED BY "password3";

GRANT SELECT 
ON `hotel2`.station
TO "util3"@"%" 
IDENTIFIED BY "password3";


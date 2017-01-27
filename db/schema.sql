CREATE TABLE sensor(
    id		INTEGER PRIMARY KEY,
    hostname	TEXT            NOT NULL,
    ipaddress	TEXT		    NOT NULL,
    macaddress	TEXT		    NOT NULL,
    data	TEXT		    NOT NULL,
    datestamp	TIMESTAMP	    DEFAULT CURRENT_TIMESTAMP
);


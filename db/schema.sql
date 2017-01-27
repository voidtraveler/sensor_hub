CREATE TABLE sensors(
    id		INTEGER PRIMARY KEY, 
    ipaddress	TEXT		    NOT NULL,
    data	TEXT		    NOT NULL,
    datestamp	TIMESTAMP	    DEFAULT CURRENT_TIMESTAMP
);


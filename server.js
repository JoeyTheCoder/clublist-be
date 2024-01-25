const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

// Verbindung zur Datenbank
const db = pgp('postgres://username:password@localhost:5432/mydatabase');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
    const { name, description, city, location, added, genre, image } = req.body;
    
    db.none('INSERT INTO mytable(name, description, city, location, added, genre, image) VALUES($1, $2, $3, $4, $5, $6, $7)', [name, description, city, location, added, genre, image])
        .then(() => {
            res.send('Daten erfolgreich eingefügt');
        })
        .catch(err => {
            console.log(err);
            res.send('Es gab einen Fehler beim Einfügen der Daten');
        });
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
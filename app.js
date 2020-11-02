const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // pentru utilizarea perechilor cheie-valoare
app.use(bodyParser.json());

const persoane = [];
persoane.push({ id: 101, nume: 'Popescu', prenume: 'Ana', email: 'ana.popescu@tuiasi.ro', data: 1288323623006 });
persoane.push({ id: 102, nume: 'Ionescu', prenume: 'Ion', email: 'ion.ionescu@tuiasi.ro', data: 1288323623007 });

app.get('/api/persoane', function (req, res) {
    console.log("GET");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(persoane));
});

app.post('/api/persoane', function (req, res) {
    console.log("POST" + JSON.stringify(req.body));
    res.setHeader('Content-Type', 'application/json');
    req.body.id = Math.floor(Math.random() * Math.floor(10000));
    persoane.push(req.body);
    res.end(JSON.stringify(req.body));
});

app.delete('/api/persoane/:pid', function (req, res) {
    console.log("DELETE" + req.params.pid);
    res.setHeader('Content-Type', 'application/json');
    let p = null;
    for (const i = 0; i < persoane.length; ++i) {
        if (persoane[i].id == req.params.pid) {
            p = persoane[i];
            persoane.splice(i, 1);
            break;
        }
    }
    res.end(JSON.stringify(p));
});

app.listen(4300, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Serverul rulează pe portul ' + 4300);
    }
});


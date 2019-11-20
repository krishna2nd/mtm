const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./triggers.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

const URL_BASE: string = "/triggers";

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        res.send("Triggers GET")
    });
    app.get(`${URL_BASE}/:id`, (req, res) => {
        res.send("Trigger Some  GET")
    });
    app.put(URL_BASE, (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
    app.post(`${URL_BASE}/:id`, (req, res) => {
        res.send("Update new trigger")
    });
};

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });

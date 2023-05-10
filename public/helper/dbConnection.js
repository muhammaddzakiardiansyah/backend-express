const mysql2 = require('mysql2');
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school',
});

db.connect( (err) => {
    if(err) {
        return console.log(err);
    } else {
        return console.log(`database success connect!`);
    }
});

module.exports = db;
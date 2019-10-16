const fs = require('fs');

const client = require('./databaseConnection');

const sql = fs.readFileSync(`${__dirname}/database.sql`).toString();

client.query(sql, (err, result) => {
  if (err) throw err;
  console.log('Built database with result: ', result);
});
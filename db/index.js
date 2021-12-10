//ajskdbnaskjndszkjdnakjsdnkjasnd
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://uddsfxkjteikhq:67232b55c5bf8b1085d8e9fe6497afe138fadc95e4acbed0c72343a618d8db48@ec2-18-210-159-154.compute-1.amazonaws.com:5432/d4ej20rk0ik1t3", {
  logging: true, // set to console.log to see the raw SQL queries

});


module.exports = db;
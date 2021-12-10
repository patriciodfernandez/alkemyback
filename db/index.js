//ajskdbnaskjndszkjdnakjsdnkjasnd
const Sequelize = require("sequelize");

const db = new Sequelize({
  database: "de8vhmcbsui7j1",
  username: "yqfpkwfzeegyvo",
  password: "46b05c5e2cc7758b8272526c6bc86961f269e80c0e039ad915da90a76703470e",
  host: "ec2-54-198-213-75.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
});
// const db = new Sequelize("postgres://yqfpkwfzeegyvo:46b05c5e2cc7758b8272526c6bc86961f269e80c0e039ad915da90a76703470e@ec2-54-198-213-75.compute-1.amazonaws.com:5432/de8vhmcbsui7j1", {
//   logging: false, // set to console.log to see the raw SQL queries

// });



module.exports = db;
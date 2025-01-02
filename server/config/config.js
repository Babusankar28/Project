require("dotenv").config();

const mongo_url = process.env.DATABASE;
const secret_key = process.env.SECRET_KEY;

module.exports = { mongo_url, secret_key };

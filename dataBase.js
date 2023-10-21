const { Client } = require('pg');
require('dotenv').config();

const client = new Client();

async function connect() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

module.exports = {
  connect,
  client,
};

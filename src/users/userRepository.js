const { AppDataSource } = require('../models/data_source');

const createUser = async (email, password, nickname) => {
  await AppDataSource.query(
    `
        INSERT INTO users (
        email, 
        password,
        nickname) VALUE (
        ?,?,?)`,
    [email, password, nickname]
  );
};

module.exports = { createUser };

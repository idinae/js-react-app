const { Pool } = require('pg');

// localhost
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'recipes',
//     password: '123456Id',
//     port: 5432
// })

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
    // user: 'cdnsqsynhaefsd',
    // host: 'ec2-54-224-120-186.compute-1.amazonaws.com',
    // database: 'd20nt4qgsobi8f',
    // password: 'ede7f7329c10f3591b89de635fcb9b830600e7f9c2151483ec0f54de61b82cc9',
    // port: 5432
});

module.exports = pool;
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your MySQL password
    database: 'book_store'
});

export default connection;
import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';
var userRoutes = require('./routes/userRoutes');

dotenv.config();

const app  = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());4

// create pg pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// chcek database server connection
pool.on('connect', () => { 
    console.log('connected to the db');
}
);

pool.on('error', (err) => {
    console.error('Error:', err);
    process.exit(-1);
})


// app.use('/api', userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);   
})

app.get('/', (req, res) => {
    res.send('Hello World');
}
    
    )

// check database connection

pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Database connected:', res.rows);
        }
    });
export default pool;
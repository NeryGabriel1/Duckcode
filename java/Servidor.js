require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuración de MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'duckcode_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

app.use(cors());
app.use(express.json());

// Ruta para registro de usuario
app.post('/register', async (req, res) => {
    const { userName, userEmail, userPassword } = req.body;
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', 
    [userEmail, hashedPassword], (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al registrar el usuario' });
        }
        res.status(200).json({ message: 'Usuario registrado con éxito' });
    });
});

// Ruta para inicio de sesión
app.post('/login', (req, res) => {
    const { userEmail, userPassword } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [userEmail], async (err, results) => {
        if (results.length > 0) {
            const validPassword = await bcrypt.compare(userPassword, results[0].password);
            if (validPassword) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        } else {
            res.status(404).json({ message: 'Usuario no registrado' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

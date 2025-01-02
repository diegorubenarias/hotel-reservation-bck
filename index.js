require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => res.send('Backend funcionando correctamente!'));

// Sincroniza la base de datos
sequelize.sync().then(() => {
  console.log('Base de datos conectada!');
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`)
  );
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/User.routes');
const categoryRouter = require('./routes/Category.routes');
const roomsRouter = require('./routes/Rooms.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => res.status(201).json({ message: 'backend conectado exitosamente!' }));


app.use('/user', usuarioRoutes);
app.use('/category', categoryRouter);
app.use('/rooms', roomsRouter);

// Sincroniza la base de datos
sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos conectada!');
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`)
  );
});


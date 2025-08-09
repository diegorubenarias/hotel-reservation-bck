require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const usuarioRoutes = require('./routes/User.routes');
const categoryRouter = require('./routes/Category.routes');
const roomsRouter = require('./routes/Room.routes');


//const usuarioRoutes = require('./routes/usuarios.routes');
const reservaRoutes = require('./routes/reservas.routes');
const habitacionRoutes = require('./routes/habitaciones.routes');
const facturaRoutes = require('./routes/facturas.routes');
const frigobarRoutes = require('./routes/frigobar.routes');
const limpiezaRoutes = require('./routes/limpieza.routes');

const { authenticateToken } = require('./middlewares/auth.middleware');


const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: '*', // Cambia esto a tu dominio en producción
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => res.status(201).json({ message: 'backend conectado exitosamente!' }));


app.use('/api/usuarios', usuarioRoutes);
app.use('/api/reservas', authenticateToken, reservaRoutes);
app.use('/api/habitaciones', authenticateToken, habitacionRoutes);
app.use('/api/facturas', authenticateToken, facturaRoutes);
app.use('/api/frigobar', authenticateToken, frigobarRoutes);
app.use('/api/limpieza', authenticateToken, limpiezaRoutes);


app.use('/user', usuarioRoutes);
app.use('/category', categoryRouter);
app.use('/rooms', roomsRouter);
app.use('/config/camas', require('./routes/Cama.route'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sincroniza la base de datos
sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos conectada!');
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`)
  );
});


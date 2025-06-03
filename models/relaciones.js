const Usuario = require('./Usuario');
const Habitacion = require('./Habitacion');
const Reserva = require('./Reserva');
const Factura = require('./Factura');
const ItemFrigobar = require('./ItemFrigobar');
const ConsumoFrigobar = require('./ConsumoFrigobar');
const Limpieza = require('./Limpieza');

// Relaciones
Usuario.hasMany(Reserva);
Reserva.belongsTo(Usuario);

Habitacion.hasMany(Reserva);
Reserva.belongsTo(Habitacion);

Reserva.hasOne(Factura);
Factura.belongsTo(Reserva);

Habitacion.hasMany(Limpieza);
Limpieza.belongsTo(Habitacion);

Habitacion.hasMany(ConsumoFrigobar);
ConsumoFrigobar.belongsTo(Habitacion);

ItemFrigobar.hasMany(ConsumoFrigobar);
ConsumoFrigobar.belongsTo(ItemFrigobar);
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false,},
    description: {type: DataTypes.TEXT, allowNull: false},
    platforms: {type: DataTypes.ENUM('Pc', 'PlayStation 5', 'PlayStation 4', 'Xbox One', 'Xbox Series S/X',
    'Nintendo Switch', 'iOS', 'Android'), allowNull: false},
    image: {type: DataTypes.BLOB, allowNull: false},
    released: {type: DataTypes.DATE, allowNull: false},
    rating: {type: DataTypes.DECIMAL, allowNull: false}
  },{
    timestamps : false
  });
};







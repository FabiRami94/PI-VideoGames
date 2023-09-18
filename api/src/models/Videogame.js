const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    name: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {min: 2, max: 30}},
    description: {type: DataTypes.TEXT, allowNull: false, validate: {min: 20, max: 200}},
    platforms: {type: DataTypes.ENUM('Pc', 'PlayStation 5', 'PlayStation 4', 'Xbox One', 
    'Xbox Series S/X', 'Nintendo Switch', 'iOS', 'Android'), allowNull: false},
    image: {type: DataTypes.BLOB, allowNull: false},
    released: {type: DataTypes.DATE, allowNull: false , validate: {isDate: true}},
    rating: {type: DataTypes.DECIMAL, allowNull: false, validate: {isDecimal: true}},
    created: {type: DataTypes.BOOLEAN, defaultValue: true}
  },{
    timestamps : false
  });
};







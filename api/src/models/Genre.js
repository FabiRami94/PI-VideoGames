const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Genre',{
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.ENUM('Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual',
      'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Massively Multiplayer', 'Racing', 'Sports',
      'Fighting', 'Family', 'Board Games', 'Educational', 'Card'), allowNull: false}  
  },{
    timestamps: false
  })

};
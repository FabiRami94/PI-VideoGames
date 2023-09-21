const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Genre',{
    id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
    // name: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false} 
    name: {type: DataTypes.ENUM('Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 
      'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Massively Multiplayer', 'Racing', 
      'Sports', 'Fighting', 'Family', 'Board Games', 'Educational', 'Card')} 
  },{
    timestamps: false
  })
};


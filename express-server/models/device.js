const Sequelize = require('sequelize');

module.exports = class Device extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      deviceModeName: {
        type: Sequelize.STRING(100)
      },
      manufacturer: {
        type: Sequelize.STRING(100)
      },
      location: {
        type: Sequelize.STRING(100)
      },
      edgeSerialNumber: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      networkInterFace: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      networkConfig: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100)
      }
    }, {
      sequelize,
      underscored: true,
      timestamps: true,
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  };
  static associate(db) {
    db.Device.belongsTo(db.Department, {foreignkey: {name: 'departmentId', onDelete: 'SET NULL'}})
    db.Device.belongsTo(db.User, {foreignkey: {name: 'userId', onDelete: 'SET NULL'}})
  }
};
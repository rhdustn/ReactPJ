const Sequelize = require("sequelize");

class Attraction extends Sequelize.Model {
  static init(seq) {
    return super.init(
      {
        att_name: { type: Sequelize.STRING(30), allowNull: false },
        north: { type: Sequelize.STRING(40), allowNull: false },
        east: { type: Sequelize.STRING(40), allowNull: false },
        star: { type: Sequelize.INTEGER, allowNull: true },
      },
      {
        sequelize: seq,
        timestamps: true,
        modelName: "Attraction",
        tableName: "attraction",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Attraction.belongsTo(db.Plan, { foreignKey: "plan_id", targetKey: "id" });
   
  }
}

module.exports = { Attraction };

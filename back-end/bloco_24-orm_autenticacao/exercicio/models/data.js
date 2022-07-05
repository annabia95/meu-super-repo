const DataSchema = (sequelize, DataTypes) => {
  const DataTable = sequelize.define("Data", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return DataTable;
};

module.exports = DataSchema;
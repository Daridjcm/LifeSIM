
export default (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceNumber: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return JSON.parse(this.getDataValue('items'));
      },
      set(value) {
        this.setDataValue('items', JSON.stringify(value));
      }
    },    
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: true,
    tableName: 'invoices'
  });

  // Relación con User
  Invoice.associate = (models) => {
    Invoice.belongsTo(models.User, {
      foreignKey: 'userID',
      as: 'user',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

  return Invoice;
};

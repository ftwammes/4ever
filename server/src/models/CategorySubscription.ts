import { ForeignKey } from './../../node_modules/sequelize/types/model.d';
import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto

interface CategorySubscriptionAttributes {
  id: number;
  userId: number;
  categoryId: number;
}

export interface CategorySubscriptionInput extends Optional<CategorySubscriptionAttributes, 'id'> {}
export interface CategorySubscriptionOutput extends Required<CategorySubscriptionAttributes> {}

class CategorySubscription extends Model<CategorySubscriptionAttributes, CategorySubscriptionInput> implements CategorySubscriptionAttributes {
  public id!: number;
  public userId!: number;
  public categoryId!: number;
}

CategorySubscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'APP_USER',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CATEGORY',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    tableName: 'CATEGORY_SUBSCRIPTION',
  }
);

export default CategorySubscription;
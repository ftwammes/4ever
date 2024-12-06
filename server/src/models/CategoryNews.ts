import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto
import CategorySubscription from './CategorySubscription';
import Category from './Category';

interface CategoryNewsAttributes {
  id: number;
  categoryId: number;
  newsId: number;
}

export interface CategoryNewsInput extends Optional<CategoryNewsAttributes, 'id'> { }
export interface CategoryNewsOutput extends Required<CategoryNewsAttributes> { }

class CategoryNews extends Model<CategoryNewsAttributes, CategoryNewsInput> implements CategoryNewsAttributes {
  public id!: number;
  public categoryId!: number;
  public newsId!: number;
}

CategoryNews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CATEGORY',
        key: 'id',
      },
    },
    newsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'NEWS',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    tableName: 'CATEGORY_NEWS',
  }
);

CategoryNews.belongsTo(Category, { foreignKey: 'categoryId' });
CategoryNews.hasMany(CategorySubscription, { foreignKey: 'categoryId' });

export default CategoryNews;
import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto

interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryInput extends Optional<CategoryAttributes, 'id'> {}
export interface CategoryOutput extends Required<CategoryAttributes> {}

class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  public id!: number;
  public name!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'CATEGORY',
  }
);

export default Category;
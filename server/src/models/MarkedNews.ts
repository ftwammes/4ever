import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto

interface MarkedNewsAttributes {
  id: number;
  userId: number;
  newsId: number;
}

export interface MarkedNewsInput extends Optional<MarkedNewsAttributes, 'id'> { }
export interface MarkedNewsOutput extends Required<MarkedNewsAttributes> { }

class MarkedNews extends Model<MarkedNewsAttributes, MarkedNewsInput> implements MarkedNewsAttributes {
  public id!: number;
  public userId!: number;
  public newsId!: number;
}

MarkedNews.init(
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
    tableName: 'MARKED_NEWS',
  }
);

export default MarkedNews;
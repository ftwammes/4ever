import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto
import CategoryNews from './CategoryNews';
import MarkedNews from './MarkedNews';

interface NewsAttributes {
    id: number;
    title: string;
    sumary: string;
    author: string;
    postedAt: Date;
    image: string;
    imageDesc: string;
    content: string;
}

export interface NewsInput extends Optional<NewsAttributes, 'id'> { }
export interface NewsOutput extends Required<NewsAttributes> { }

class News extends Model<NewsAttributes, NewsInput> implements NewsAttributes {
    public id!: number;
    public title!: string;
    public sumary!: string;
    public author!: string;
    public postedAt!: Date;
    public image!: string;
    public imageDesc!: string;
    public content!: string;
}

News.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sumary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imageDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'NEWS',
    }
);

News.hasMany(CategoryNews, { foreignKey: 'newsId' });

CategoryNews.belongsTo(News, { foreignKey: 'newsId' });

News.hasMany(MarkedNews, { foreignKey: 'newsId' });

MarkedNews.belongsTo(News, { foreignKey: 'newsId' });

export default News;
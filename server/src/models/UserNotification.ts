import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../database'; // Certifique-se de que o caminho está correto

interface UserNotificationAttributes {
  id: number;
  userId: number;
  notification: string;
  readed?: boolean;
}

export interface UserNotificationInput extends Optional<UserNotificationAttributes, 'id'> { }
export interface UserNotificationOutput extends Required<UserNotificationAttributes> { }

class UserNotification extends Model<UserNotificationAttributes, UserNotificationInput> implements UserNotificationAttributes {
  public id!: number;
  public userId!: number;
  public notification!: string;
  public readed?: boolean;
}

UserNotification.init(
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
    notification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    readed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    tableName: 'USER_NOTIFICATION',
  }
);

export default UserNotification;
import express from 'express';
import dotenv from 'dotenv';
import {sequelize} from './database';
import authMiddleware from './middleware/AuthMiddleware';

import User from './models/User';
import Category from './models/Category';
import CategorySubscription from './models/CategorySubscription';
import News from './models/News';
import CategoryNews from './models/CategoryNews';
import UserNotification from './models/UserNotification';
import MarkedNews from './models/MarkedNews';

import userRoutes from './routes/UserRoutes';
import newsRoutes from './routes/NewsRoutes';
import notificationRoutes from './routes/NotificationRoutes';
import categoryRoutes from './routes/CategoryRoutes';
import markedNewsRoutes from './routes/MarkedNewsRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

app.use('/news', authMiddleware, newsRoutes);

app.use('/notification', authMiddleware, notificationRoutes);

app.use('/category', authMiddleware, categoryRoutes);

app.use('/marked', authMiddleware, markedNewsRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    await User.sync();
    await Category.sync();
    await CategorySubscription.sync();
    await News.sync();
    await CategoryNews.sync();
    await UserNotification.sync();
    await MarkedNews.sync();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();
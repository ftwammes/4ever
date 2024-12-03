import { Request, Response } from 'express';

import UserNotification from '../models/UserNotification';

const NotificationController = {
  list: async (req: Request, res: Response) => {
    try {
      const offset = Number(req.query.offset) || 0;
      const news = await UserNotification.findAll({
        limit: 15,
        offset,
        order: [['id', 'DESC']],
        where: {
          userId: req.body.session.userId,
          readed: false
        }
      });

      return res.status(200).json(news);
    } catch (error) {
      console.error('Erro ao buscar notificações:', error);
      return res.status(500).json({ error: 'Erro ao buscar notificações' });
    }
  },
  read: async (req: Request, res: Response) => {
    try {
      const id = Number(req.body.id);
      const notification = await UserNotification.update({
        readed: true
      }, {
        where: {
          id,
          userId: req.body.session.userId
        }
      }
      );

      return res.status(200).json(notification);
    } catch (error) {
      console.error('Erro ao buscar notificação:', error);
      return res.status(500).json({ error: 'Erro ao buscar notificação' });
    }
  }
};

export default NotificationController;
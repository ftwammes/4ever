import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import News from '../models/News';
import dotenv from 'dotenv';
import CategorySubscription from '../models/CategorySubscription';
import CategoryNews from '../models/CategoryNews';

dotenv.config();

const NewsController = {
    list: async (req: Request, res: Response) => {
        try {
            const categoryId = Number(req.query.categoryId);
            const offset = Number(req.query.offset) || 0;
            const news = await News.findAll({
                limit: 5,
                offset,
                order: [['postedAt', 'DESC']],
                include: [{
                    model: CategoryNews,
                    required: true,
                    include: [{
                        model: CategorySubscription,
                        required: true,
                        where: {
                            userId: req.body.session.userId
                        }
                    }],
                    where: categoryId ? {
                        '$CategoryNews.categoryId$': categoryId
                    } : {}
                }]
            });

            return res.status(200).json(news);
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
            return res.status(500).json({ error: 'Erro ao buscar notícias' });
        }
    }, 

    get: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const news = await News.findByPk(id);

            if (!news) {
                return res.status(404).json({ error: 'Notícia não encontrada' });
            }

            return res.status(200).json(news);
        } catch (error) {
            console.error('Erro ao buscar notícia:', error);
            return res.status(500).json({ error: 'Erro ao buscar notícia' });
        }
    }
};

export default NewsController;
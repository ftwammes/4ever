import { Request, Response } from 'express';

import MarkedNews from '../models/MarkedNews';
import News from '../models/News';

const MarkedNewsController = {
    list: async (req: Request, res: Response) => {
        try {
            const offset = Number(req.query.offset) || 0;
            const markedNews = await MarkedNews.findAll({
                limit: 15,
                offset,
                order: [['id', 'DESC']],
                include: [{
                    model: News,
                    required: true
                }],
                where: {
                    userId: req.body.session.userId
                }
            });

            return res.status(200).json(markedNews);
        } catch (error) {
            console.error('Erro ao buscar notícias marcadas:', error);
            return res.status(500).json({ error: 'Erro ao buscar notícias marcadas' });
        }
    },
    mark: async (req: Request, res: Response) => {
        try {
            const newsId = Number(req.body.id);

            if (!newsId) {
                return res.status(400).json({ error: 'Informe o id da notícia' });
            }

            const markedNews = await MarkedNews.create({
                userId: req.body.session.userId,
                newsId
            });

            return res.status(201).json(markedNews);
        } catch (error) {
            console.error('Erro ao marcar notícia:', error);
            return res.status(500).json({ error: 'Erro ao marcar notícia' });
        }
    },
    unmark: async (req: Request, res: Response) => {
        try {
            const newsId = Number(req.body.id);

            if (!newsId) {
                return res.status(400).json({ error: 'Informe o id da notícia' });
            }

            await MarkedNews.destroy({
                where: {
                    userId: req.body.session.userId,
                    newsId
                }
            });

            return res.status(200).send();
        } catch (error) {
            console.error('Erro ao desmarcar notícia:', error);
            return res.status(500).json({ error: 'Erro ao desmarcar notícia' });
        }
    }
};

export default MarkedNewsController;
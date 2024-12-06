import { Type } from './../../../client/4ever/node_modules/yaml/util.d';
import { Request, Response } from 'express';

import News from '../models/News';
import CategorySubscription from '../models/CategorySubscription';
import CategoryNews from '../models/CategoryNews';
import { QueryTypes } from 'sequelize';

const NewsController = {
    list: async (req: Request, res: Response) => {
        try {
            const categoryId = Number(req.query.categoryId);
            const offset = Number(req.query.offset) || 0;
            
            if (!News.sequelize) {
                throw new Error('Sequelize instance is not available on News model');
            }

            const news = await News.sequelize.query(`
                SELECT N.*
                FROM public."NEWS" N
                INNER JOIN public."CATEGORY_NEWS" CN ON N.ID = CN."newsId"
                INNER JOIN public."CATEGORY_SUBSCRIPTION" CS ON CN."categoryId"  = CS."categoryId"
                WHERE CS."userId" = :userId
                AND CN."categoryId"  = :categoryId
                ORDER BY N."postedAt"  DESC
                LIMIT 5 OFFSET :offset
            `, {
                replacements: {
                    userId: req.body.session.userId,
                    categoryId,
                    offset
                },
                type: QueryTypes.SELECT
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
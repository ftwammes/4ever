import { Request, Response } from 'express';

import CategorySubscription from './../models/CategorySubscription';
import Category from '../models/Category';

const CategoryController = {
    listAll: async (req: Request, res: Response) => {
        try {
            const offset = Number(req.query.offset) || 0;
            const category = await Category.findAll({
                limit: 15,
                offset,
                order: [['name', 'ASC']], 
                include: [{
                    model: CategorySubscription,
                    required: false,
                    where: {
                        userId: req.body.session.userId
                    }
                }]
            });

            return res.status(200).json(category);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            return res.status(500).json({ error: 'Erro ao buscar categorias' });
        }
    },
    list: async (req: Request, res: Response) => {
        try {
            const offset = Number(req.query.offset) || 0;
            const category = await Category.findAll({
                limit: 15,
                offset,
                order: [['name', 'ASC']],
                include: [{
                    model: CategorySubscription,
                    required: true,
                    where: {
                        userId: req.body.session.userId
                    }
                }]
            });

            return res.status(200).json(category);
        } catch (error) {
            console.error('Erro ao buscar categorias inscritas:', error);
            return res.status(500).json({ error: 'Erro ao buscar categorias inscritas' });
        }
    },
    subscribe: async (req: Request, res: Response) => {
        try {
            const id = Number(req.body.id);
            const category = await Category.findByPk(id);

            if (!category) {
                return res.status(404).json({ error: 'Categoria não encontrada' });
            }

            await CategorySubscription.create({
                userId: req.body.session.userId,
                categoryId: id
            });

            return res.status(201).json({ message: 'Inscrição realizada com sucesso' });
        } catch (error) {
            console.error('Erro ao se inscrever na categoria ', error);
            return res.status(500).json({ error: 'Erro ao se inscrever na categoria ' });
        }
    },
    unsubscribe: async (req: Request, res: Response) => {
        try {
            const id = Number(req.body.id);
            const category = await Category.findByPk(id);

            if (!category) {
                return res.status(404).json({ error: 'Categoria não encontrada' });
            }

            await CategorySubscription.destroy({
                where: {
                    userId: req.body.session.userId,
                    categoryId: id
                }
            });

            return res.status(200).json({ message: 'Inscrição cancelada com sucesso' });
        } catch (error) {
            console.error('Erro ao se desinscrever na categoria ', error);
            return res.status(500).json({ error: 'Erro ao se desinscrever na categoria ' });
        }
    }
};

export default CategoryController;
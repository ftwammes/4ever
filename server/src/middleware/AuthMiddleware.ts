import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number; email: string };

    console.log('Token:', token);
    console.log('Token decodificado:', decoded);
    req.body.session = {};
    req.body.session.userId = decoded.id;
    req.body.session.email = decoded.email;

    next();
  } catch (error) {
    console.error('Token inválido:', error);
    return res.status(400).json({ error: 'Token inválido' });
  }

};

export default authMiddleware;
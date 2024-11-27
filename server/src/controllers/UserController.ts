import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User'; 
import dotenv from 'dotenv';

dotenv.config();  // Para carregar variáveis de ambiente

const UserController = {
  register: async (req: Request, res: Response) => {
    try {
      const { email, name, lastname, birthDate, password } = req.body;

      // Verifica se todos os campos obrigatórios foram preenchidos
      if (!email || !name || !lastname || !birthDate || !password) {
        return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
      }

      // Criptografa a senha
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Criação do usuário
      const newUser = await User.create({ 
        email, 
        name, 
        lastname, 
        birthDate, 
        password: hashedPassword  // Armazena a senha criptografada
      });
      
      return res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        lastname: newUser.lastname,
        birthDate: newUser.birthDate,
      });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Verifica se ambos os campos foram preenchidos
      if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      // Busca o usuário pelo email
      const user = await User.findOne({ where: { email } });
      
      if (!user) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }

      // Verifica se a senha informada corresponde à senha criptografada
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Email ou senha incorretos' });
      }

      // Geração do JWT
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

      // Retorna o usuário com o token
      return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        lastname: user.lastname,
        birthDate: user.birthDate,
        token,
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};

export default UserController;
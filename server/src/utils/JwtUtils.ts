import jwt from 'jsonwebtoken';

class JwtUtils {
  static generateToken(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  }

  static verifyToken(token: string): object | null {
    try {
      return jwt.verify(token, process.env.JWT_SECRET as string);
    } catch {
      return null;
    }
  }
}

export default JwtUtils;
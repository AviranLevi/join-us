import jwt from 'jsonwebtoken';
const { env } = process;

export const createToken = (data) =>
  jwt.sign(data, env.PRIVATE_KEY, {
    expiresIn: 60 * 120,
  });

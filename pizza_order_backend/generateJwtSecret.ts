import { randomBytes } from 'crypto';

const generateJwtSecret = () => {
  return randomBytes(64).toString('hex');
}

console.log(generateJwtSecret());
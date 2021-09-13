require('dotenv').config();
import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const password = process.env.PASS;

const key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
const iv = Buffer.alloc(16, 0); 


export function encryptText(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

export function decryptText(text) {
    const decipher = crypto.createDecipheriv(algorithm, password);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { Role } from '../models/Role';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AuthService {
    async register(username, password, roleName) {
        const userRepository = getRepository(User);
        const roleRepository = getRepository(Role);

        const hashedPassword = await bcrypt.hash(password, 10);
        const role = await roleRepository.findOne({ where: { name: roleName } });

        const user = userRepository.create({
            username,
            password: hashedPassword,
            role
        });

        await userRepository.save(user);
        return user;
    }

    async login(username, password) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { username }, relations: ['role'] });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }

        const token = this.generateToken(user);
        return { user, token };
    }

    generateToken(user) {
        const payload = { id: user.id, username: user.username, role: user.role.name };
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    async validateUser(userId) {
        const userRepository = getRepository(User);
        return await userRepository.findOne(userId);
    }
}

export default new AuthService();
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./entities/users.entity";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ) {}

async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
}

async findAll(): Promise<User[]> {
    return await this.userRepository.find();
}

async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
}

async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
        id,
        ...updateUserDto,
    });

    if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
    }

    return await this.userRepository.save(user);
}

async remove(id: string): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepository.delete(id);
    return user;
}
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = []; // Simulating a database

create(createUserDto: CreateUserDto) {
    const newUser = {...createUserDto };
    this.users.push(newUser);
    return newUser;
}

findOne(id: string) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
}

update(id: string, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
    throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
}
}

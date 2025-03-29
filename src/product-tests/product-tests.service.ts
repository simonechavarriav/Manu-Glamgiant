import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTests } from 'src/product-tests/entities/product-test.entities';
import { CreateProductTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from "./dto/update-product-test.dto";
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class ProductTestsService {
    constructor(
        @InjectRepository(ProductTests)
        private readonly productTestRepository: Repository<ProductTests>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createProductTest(dto: CreateProductTestDto): Promise<ProductTests> {
        const test = this.productTestRepository.create({
        user: { id: dto.userId },
        product: { id: dto.productId },
        reaction: dto.reaction,
        rating: dto.rating,
        survival_status: dto.survival_status ?? true,
        });

    const savedTest = await this.productTestRepository.save(test);

    if (dto.reaction) {
        const user = await this.userRepository.findOne({ where: { id: dto.userId } });
        if (user) {
            const reactions = user.allergic_reactions || [];
            if (!reactions.includes(dto.reaction)) {
                user.allergic_reactions = [...reactions, dto.reaction];
                await this.userRepository.save(user);
            }
        }
    }

    return savedTest;
    }

    async findAll(): Promise<ProductTests[]> {
        return this.productTestRepository.find({ relations: ['user', 'product'] });
    }

    async findOne(id: string): Promise<ProductTests> {
        const test = await this.productTestRepository.findOne({ where: { id }, relations: ['user', 'product'] });
        if (!test) {
            throw new NotFoundException(`Product test with ID ${id} not found`);
        }
        return test;
    }

    async update(id: string, updateProductTestDto: UpdateProductTestDto): Promise<ProductTests> {
        const test = await this.productTestRepository.preload({
        id,
        ...updateProductTestDto,
        });

    if (!test) {
        throw new NotFoundException(`Product test with ID ${id} not found`);
    }

    return this.productTestRepository.save(test);
    }

    async remove(id: string): Promise<void> {
        const test = await this.productTestRepository.findOne({ where: { id } });

        if (!test) {
            throw new NotFoundException(`Product test with ID ${id} not found`);
        }

    await this.productTestRepository.remove(test);
    }
}

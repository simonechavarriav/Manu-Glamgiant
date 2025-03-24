import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTests } from 'src/product-tests/entities/product-test.entities';
import { CreateProductTestDto } from './dto/create-product-test.dto';
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
}

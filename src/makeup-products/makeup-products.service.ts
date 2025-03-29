import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MakeupProducts } from 'src/makeup-products/entities/makeup-products.entity';
import { CreateMakeupDto } from './dto/create-makeup.dto';
import { UpdateMakeupDto } from './dto/update-makeup.dto';

@Injectable()
export class MakeupProductsService {
    constructor(
        @InjectRepository(MakeupProducts)
        private readonly makeupProductRepository: Repository<MakeupProducts>,
    ) {}

    async create(dto: CreateMakeupDto): Promise<MakeupProducts> {
        const product = this.makeupProductRepository.create(dto);
        return await this.makeupProductRepository.save(product);
    }

    
    async findAll(): Promise<MakeupProducts[]> {
        return this.makeupProductRepository.find();
    }

    async findOne(id: string): Promise<MakeupProducts> {
        const product = await this.makeupProductRepository.findOne({ where: { id } });
        if (!product) {
            throw new NotFoundException(`Makeup product with ID ${id} not found`);
        }
        return product;
    }

    async update(id: string, updateMakeupDto: UpdateMakeupDto): Promise<MakeupProducts> {
        const product = await this.makeupProductRepository.preload({
            id,
            ...updateMakeupDto,
        });

        if (!product) {
            throw new NotFoundException(`Makeup product with ID ${id} not found`);
        }

        return this.makeupProductRepository.save(product);
    }

    async remove(id: string): Promise<void> {
        const product = await this.makeupProductRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Makeup product with ID ${id} not found`);
        }

        await this.makeupProductRepository.remove(product);
    }
}

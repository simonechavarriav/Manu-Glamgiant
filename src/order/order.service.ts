import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from "./entities/order.entity";
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from "../users/entities/users.entity";
import { MakeupProducts } from "../makeup-products/entities/makeup-products.entity";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(MakeupProducts)
        private readonly productRepository: Repository<MakeupProducts>,
    ) {}

async createOrder(dto: CreateOrderDto): Promise<Order> {
    const client = await this.userRepository.findOne({ where: { id: dto.clientId } });
    if (!client) throw new NotFoundException('User not found');

    const products = await this.productRepository.findByIds(dto.productIds);
    if (products.length !== dto.productIds.length) {
        throw new NotFoundException('Some products not found');
    }

    const order = this.orderRepository.create({
    client,
    products,
    totalAmount: dto.totalAmount,
    paymentStatus: dto.paymentStatus,
    });

    return this.orderRepository.save(order);
}

async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['client', 'products'] });
}
async findOne(id: string): Promise<Order> {
    const product = await this.orderRepository.findOne({ where: { id } });
    if (!product) {
        throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return product;
}

async updateOrder(id: string, dto: UpdateOrderDto): Promise<Order> {
    const order = await this.orderRepository.preload({ id, ...dto });
    if (!order) throw new NotFoundException('Order not found');
    
    return this.orderRepository.save(order);
}

async deleteOrder(id: string): Promise<void> {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Order not found');
}
}
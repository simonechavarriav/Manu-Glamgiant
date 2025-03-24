import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { User } from '../users/entities/users.entity';
import { MakeupProducts } from '../makeup-products/entities/makeup-products.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, MakeupProducts])],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [TypeOrmModule],
})
export class OrderModule {}


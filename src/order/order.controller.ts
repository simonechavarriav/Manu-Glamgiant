import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    create(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto);
    }

    @Get()
    findAll() {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateOrderDto) {
        return this.orderService.updateOrder(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.deleteOrder(id);
    }
}

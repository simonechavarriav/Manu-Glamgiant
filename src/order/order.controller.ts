import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    create(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto);
    }

    @Get()
    findAll() {
        return this.orderService.getOrders();
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

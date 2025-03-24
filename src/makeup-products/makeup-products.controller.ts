import {Controller, UsePipes, Body, Post, ValidationPipe } from '@nestjs/common';
import { CreateMakeupDto } from "./dto/create-makeup.dto";

@Controller('makeup-products')
export class MakeupProductsController {
    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    create(@Body() createMakeupDto: CreateMakeupDto) {
        return createMakeupDto;
    }
}
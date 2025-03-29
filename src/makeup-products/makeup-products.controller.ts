import { Controller, Get, Post, Patch, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { MakeupProductsService } from './makeup-products.service';
import { CreateMakeupDto } from './dto/create-makeup.dto';
import { UpdateMakeupDto } from './dto/update-makeup.dto';
import { MakeupProducts } from './entities/makeup-products.entity';

@Controller('makeup-products')
export class MakeupProductsController {
    constructor(private readonly makeupProductsService: MakeupProductsService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createMakeupDto: CreateMakeupDto): Promise<MakeupProducts> {
        return this.makeupProductsService.create(createMakeupDto);
    }

    @Get()
    async findAll(): Promise<MakeupProducts[]> {
        return this.makeupProductsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MakeupProducts> {
        return this.makeupProductsService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateMakeupDto: UpdateMakeupDto,
    ): Promise<MakeupProducts> {
        return this.makeupProductsService.update(id, updateMakeupDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.makeupProductsService.remove(id);
    }
}

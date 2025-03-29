import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductTestsService } from './product-tests.service';
import { CreateProductTestDto } from './dto/create-product-test.dto';
import { UpdateProductTestDto } from "./dto/update-product-test.dto";
import { ProductTests } from 'src/product-tests/entities/product-test.entities';

@Controller('product-tests')
export class ProductTestsController {
    constructor(private readonly productTestsService: ProductTestsService) {}

    @Post()
    async create(@Body() createProductTestDto: CreateProductTestDto): Promise<ProductTests> {
        return this.productTestsService.createProductTest(createProductTestDto);
    }

    @Get()
    async findAll(): Promise<ProductTests[]> {
        return this.productTestsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductTests> {
        return this.productTestsService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateProductTestDto: UpdateProductTestDto,
    ): Promise<ProductTests> {
        return this.productTestsService.update(id, updateProductTestDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.productTestsService.remove(id);
    }
}

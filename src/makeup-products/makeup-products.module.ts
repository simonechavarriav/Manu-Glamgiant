import { Module } from '@nestjs/common';
import { MakeupProductsController } from './makeup-products.controller';
import { MakeupProductsService } from './makeup-products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupProducts } from './entities/makeup-products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MakeupProducts])],
  controllers: [MakeupProductsController],
  providers: [MakeupProductsService]
})
export class MakeupProductsModule {}

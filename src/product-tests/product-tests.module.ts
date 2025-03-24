import { Module } from '@nestjs/common';
import { ProductTestsService } from './product-tests.service';
import { ProductTestsController } from './product-tests.controller';

@Module({
  providers: [ProductTestsService],
  controllers: [ProductTestsController]
})
export class ProductTestsModule {}

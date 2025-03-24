import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTests } from "./entities/product-test.entities";
import { User } from "../users/entities/users.entity";
import { ProductTestsService } from './product-tests.service';
import { ProductTestsController } from './product-tests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTests, User])],
  providers: [ProductTestsService],
  controllers: [ProductTestsController],
  exports: [TypeOrmModule],
})
export class ProductTestsModule {}

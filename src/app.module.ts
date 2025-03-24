import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MakeupProductsModule } from './makeup-products/makeup-products.module';
import { ProductTestsModule } from './product-tests/product-tests.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({//Configuración de la base de datos
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, //cambiar a false en producción
    }),
    UsersModule,
    MakeupProductsModule,
    ProductTestsModule,
    OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { IsEnum, IsNotEmpty, IsUUID, IsArray, IsNumber } from 'class-validator';
import { PaymentStatus } from '../entities/order.entity';

export class CreateOrderDto {
    @IsUUID()
    @IsNotEmpty()
    clientId: string;

    @IsArray()
    @IsUUID()
    productIds: string[];

    @IsNumber()
    totalAmount: number;

    @IsEnum(PaymentStatus)
    paymentStatus: PaymentStatus;
}

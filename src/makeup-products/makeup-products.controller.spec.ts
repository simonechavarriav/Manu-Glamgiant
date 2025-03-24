import { Test, TestingModule } from '@nestjs/testing';
import { MakeupProductsController } from './makeup-products.controller';

describe('MakeupProductsController', () => {
  let controller: MakeupProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MakeupProductsController],
    }).compile();

    controller = module.get<MakeupProductsController>(MakeupProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

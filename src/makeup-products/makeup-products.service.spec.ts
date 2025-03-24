import { Test, TestingModule } from '@nestjs/testing';
import { MakeupProductsService } from './makeup-products.service';

describe('MakeupProductsService', () => {
  let service: MakeupProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MakeupProductsService],
    }).compile();

    service = module.get<MakeupProductsService>(MakeupProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

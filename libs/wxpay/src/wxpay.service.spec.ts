import { Test, TestingModule } from '@nestjs/testing';
import { WxpayService } from './wxpay.service';

describe('WxpayService', () => {
  let service: WxpayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WxpayService],
    }).compile();

    service = module.get<WxpayService>(WxpayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

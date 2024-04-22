import { Module } from '@nestjs/common';
import { WxpayService } from './wxpay.service';

@Module({
  providers: [WxpayService],
  exports: [WxpayService],
})
export class WxpayModule {}

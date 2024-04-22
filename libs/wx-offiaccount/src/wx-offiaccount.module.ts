import { Module } from '@nestjs/common';
import { WxOffiaccountService } from './wx-offiaccount.service';
import { WxOffiaccountConfigurableModule } from './wx-offiaccount.module-definition';

@Module({
  providers: [WxOffiaccountService],
  exports: [WxOffiaccountService],
})
export class WxOffiaccountModule extends WxOffiaccountConfigurableModule {
  declare static register: typeof WxOffiaccountConfigurableModule.register;
  declare static registerAsync: typeof WxOffiaccountConfigurableModule.registerAsync;
}
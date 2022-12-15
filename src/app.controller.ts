import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IIndicator } from './interfaces/indicator.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getIndicators(): Promise<IIndicator[]> {
    return this.appService.getIndicatorsList();
  }
}

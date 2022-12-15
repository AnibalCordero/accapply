import { Injectable } from '@nestjs/common';
import { ExternalService } from './external/external.service';
import { IIndicator } from './interfaces/indicator.interface';

@Injectable()
export class AppService {
  constructor(private readonly externalService: ExternalService) { }

  async getIndicatorsList(): Promise<IIndicator[]> {
    const { data } = await this.externalService.getAllIndicators();
    const indicatorsList: IIndicator[] = [];
    Object.entries(data).forEach(([key, value]) => {
      if (key != 'version' && key != 'autor' && key != 'fecha') {
        indicatorsList.push(value);
      }
    });
    return indicatorsList;
  }
}
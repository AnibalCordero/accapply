import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { IResult } from 'src/interfaces/result.interface';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class ExternalService {
  constructor(
    private readonly httpService: HttpService,
  ) { }

  async getAllIndicators(): Promise<AxiosResponse<IResult>> {
    return this.httpService.axiosRef.get(process.env.MINDICATOR_API);
  }
}

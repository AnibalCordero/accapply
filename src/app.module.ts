import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalModule } from './external/external.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ExternalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

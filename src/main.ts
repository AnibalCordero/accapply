import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://d1x7s6ldgsxua1.cloudfront.net',
    ],
    methods: ["GET"],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix for adding to all raute "/api/v1"
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

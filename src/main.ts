import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line prefer-const
let port = process.env.PORT || 4000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

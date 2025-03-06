import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so the frontend can make requests
  app.enableCors({
    origin: 'http://localhost:4000', // Allow frontend
    credentials: true, // Allow cookies if needed
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

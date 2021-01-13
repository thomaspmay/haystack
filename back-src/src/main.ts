import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('HayStack')
    .setDescription('Documentation of the HayStack API')
    .setVersion('1.0')
    .addTag('Student Locations')
    .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app, document);

  app.use(
    rateLimit({
      // currently set to 15 minutes
      windowMs: 15 * 60 * 1000,
      max: 100,
    })
  )
  app.use(helmet())
  await app.listen(3000);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: {
      key: readFileSync(resolve(__dirname, '../https/localhost+1-key.pem')),
      cert: readFileSync(resolve(__dirname, '../https/localhost+1.pem')),
    },
  });
  // cors跨域
  app.enableCors({
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://localhost:5173',
      'http://192.168.1.4:3000',
    ],
  });
  // body校验
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  // 部署静态资源
  app.useStaticAssets(resolve(__dirname, '../view/vue-app'), {
    prefix: '/vue/',
  });
  app.useStaticAssets(resolve(__dirname, '../view/react-app'), {
    prefix: '/vite-react/',
  });
  app.useStaticAssets(resolve(__dirname, '../public'), {
    prefix: '/public',
  });
  await app.listen(3000);
}
bootstrap();

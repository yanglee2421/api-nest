import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import * as gzip from 'express-static-gzip';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    /*  httpsOptions: {
       key: readFileSync(toPath('../https/localhost+1-key.pem')),
      cert: readFileSync(toPath('../https/localhost+1.pem')),
    }, */
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
      forbidNonWhitelisted: false,
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // 部署静态资源
  app.useStaticAssets(toPath('../view/vue-app'), {
    prefix: '/vite-vue/',
  });
  app.useStaticAssets(toPath('../public'), {
    prefix: '/public',
  });
  app.use('/vite-react', gzip(toPath('../view/react-app'), {}));
  await app.listen(3000);
}
bootstrap();

function toPath(path: string) {
  return resolve(__dirname, path);
}

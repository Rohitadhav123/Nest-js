import { NestFactory } from '@nestjs/core';
import { RootModules } from './root.module';


async function bootstrap() {
  const app = await NestFactory.create(RootModules );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

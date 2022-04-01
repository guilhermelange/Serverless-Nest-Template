/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './modules/exception/httpExceptionFilter';
import { configure as serverlessExpress } from '@vendia/serverless-express';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  app.useGlobalFilters(new HttpExceptionFilter());
  server = serverlessExpress({ app: expressApp });
  return server;
}
bootstrap();

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
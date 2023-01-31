import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

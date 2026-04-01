import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { KostModule } from './kost/kost.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule, KostModule, ReviewsModule, BooksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

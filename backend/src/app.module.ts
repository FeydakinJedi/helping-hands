import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { HelpRequestsModule } from './help-requests/help-requests.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule, HelpRequestsModule, MessagesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

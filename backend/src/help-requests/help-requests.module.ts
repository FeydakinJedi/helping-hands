import { Module } from '@nestjs/common';
import { HelpRequestsService } from './help-requests.service';
import { HelpRequestsController } from './help-requests.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HelpRequestsService],
  controllers: [HelpRequestsController]
})
export class HelpRequestsModule {}

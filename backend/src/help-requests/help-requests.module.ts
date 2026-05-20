import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelpRequestsService } from './help-requests.service';
import { HelpRequestsController } from './help-requests.controller';
import { HelpRequest, HelpRequestSchema } from './schemas/help-request.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: HelpRequest.name, schema: HelpRequestSchema }])],
  providers: [HelpRequestsService],
  controllers: [HelpRequestsController],
})
export class HelpRequestsModule {}
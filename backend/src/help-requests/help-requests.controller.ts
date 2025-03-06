import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HelpRequestsService } from './help-requests.service';

@Controller('help-requests')
export class HelpRequestsController {
  constructor(private readonly helpRequestsService: HelpRequestsService) {}

  @Post()
  createHelpRequest(@Body() body: { title: string; details: string; skills: string[]; tools: string[]; userId: string }) {
    return this.helpRequestsService.createHelpRequest(body.title, body.details, body.skills, body.tools, body.userId);
  }

  @Get()
  getAllHelpRequests() {
    return this.helpRequestsService.getHelpRequests();
  }

  @Get(':id')
  getHelpRequestById(@Param('id') id: string) {
    return this.helpRequestsService.getHelpRequestById(id);
  }
}

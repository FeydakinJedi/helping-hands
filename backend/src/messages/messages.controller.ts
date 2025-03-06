import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  sendMessage(@Body() body: { senderId: string; receiverId: string; content: string }) {
    return this.messagesService.sendMessage(body.senderId, body.receiverId, body.content);
  }

  @Get(':userId')
  getMessagesForUser(@Param('userId') userId: string) {
    return this.messagesService.getMessagesForUser(userId);
  }
}

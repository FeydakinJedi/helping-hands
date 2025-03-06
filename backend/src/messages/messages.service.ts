import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async sendMessage(senderId: string, receiverId: string, content: string): Promise<Message> {
    return this.prisma.message.create({
      data: { senderId, receiverId, content },
    });
  }

  async getMessagesForUser(userId: string): Promise<Message[]> {
    return this.prisma.message.findMany({
      where: { OR: [{ senderId: userId }, { receiverId: userId }] },
      orderBy: { createdAt: 'desc' },
    });
  }
}

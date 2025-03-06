import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HelpRequest } from '@prisma/client';

@Injectable()
export class HelpRequestsService {
  constructor(private prisma: PrismaService) {}

  async createHelpRequest(title: string, details: string, skills: string[], tools: string[], userId: string): Promise<HelpRequest> {
    return this.prisma.helpRequest.create({
      data: { title, details, skills, tools, userId },
    });
  }

  async getHelpRequests(): Promise<HelpRequest[]> {
    return this.prisma.helpRequest.findMany();
  }

  async getHelpRequestById(id: string): Promise<HelpRequest | null> {
    return this.prisma.helpRequest.findUnique({ where: { id } });
  }
}

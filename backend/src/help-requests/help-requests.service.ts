import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HelpRequest, HelpRequestDocument } from './schemas/help-request.schema';

@Injectable()
export class HelpRequestsService {
  constructor(
    @InjectModel(HelpRequest.name) private helpRequestModel: Model<HelpRequestDocument>,
  ) {}

  async createHelpRequest(
    title: string,
    description: string,
    skills: string[],
    supplies: string[],
    userId: string,
  ): Promise<HelpRequestDocument> {
    const request = new this.helpRequestModel({
      title,
      description,
      skills,
      supplies,
      author: userId,
    });
    return request.save();
  }

  async getHelpRequests(): Promise<HelpRequestDocument[]> {
    return this.helpRequestModel.find().populate('author', 'name email').exec();
  }

  async getHelpRequestById(id: string): Promise<HelpRequestDocument | null> {
    return this.helpRequestModel.findById(id).populate('author', 'name email').exec();
  }

  async searchBySkillsOrSupplies(skills?: string[], supplies?: string[]): Promise<HelpRequestDocument[]> {
    const query: any = {};
    if (skills?.length) query.skills = { $in: skills };
    if (supplies?.length) query.supplies = { $in: supplies };
    return this.helpRequestModel.find(query).populate('author', 'name email').exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private messageModel: Model<MessageDocument>) {}

  async sendMessage(
    senderId: string,
    recipientId: string,
    body: string,
  ): Promise<MessageDocument> {
    const message = new this.messageModel({ sender: senderId, recipient: recipientId, body });
    return message.save();
  }

  async getMessagesForUser(userId: string): Promise<MessageDocument[]> {
    return this.messageModel
      .find({ $or: [{ sender: userId }, { recipient: userId }] })
      .populate('sender', 'name email')
      .populate('recipient', 'name email')
      .sort({ createdAt: -1 })
      .exec();
  }

  async getConversation(userAId: string, userBId: string): Promise<MessageDocument[]> {
    return this.messageModel
      .find({
        $or: [
          { sender: userAId, recipient: userBId },
          { sender: userBId, recipient: userAId },
        ],
      })
      .populate('sender', 'name email')
      .populate('recipient', 'name email')
      .sort({ createdAt: 1 })
      .exec();
  }
}

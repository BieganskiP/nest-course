import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessegesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messegesService: MessegesService) {}

  @Get()
  listMessages() {
    return this.messegesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messegesService.create(body.content);
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messegesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}

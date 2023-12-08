import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessegesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessegesService, MessagesRepository],
})
export class MessagesModule {}

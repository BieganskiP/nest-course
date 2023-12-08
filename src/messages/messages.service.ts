import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessegesService {
  constructor(public messegesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messegesRepo.findOne(id);
  }

  findAll() {
    return this.messegesRepo.findAll();
  }

  create(content: string) {
    return this.messegesRepo.create(content);
  }
}

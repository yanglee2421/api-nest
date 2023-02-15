import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pas } from './entities';
import {} from '@nestjs/typeorm';

@Injectable()
export class PasService {
  constructor(@InjectRepository(Pas) pasRepository: Repository<Pas>) {}
}

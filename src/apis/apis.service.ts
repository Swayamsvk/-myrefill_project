import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RateEntity } from './apis.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RateDTO } from './apis.dto';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(RateEntity)
    private rateRepository: Repository<RateEntity>,
  ) {}

  async create(data: RateDTO) {
    const rate = await this.rateRepository.create(data);
    await this.rateRepository.save(rate);
    return rate;
  }
}

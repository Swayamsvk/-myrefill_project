import { Injectable, HttpService } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RateEntity } from './apis.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RateDTO } from './apis.dto';
import { map } from 'rxjs/operators';

var headers = {
  Accept: 'application/json',
  'user-key': 'this_is_zomato_key',
};

@Injectable()
export class ApisService {
  constructor(
    private http: HttpService,
    @InjectRepository(RateEntity)
    private rateRepository: Repository<RateEntity>,
  ) {}

  getAll() {
    return this.http
      .get('https://developers.zomato.com/api/v2.1/search?q=India&count=20', {
        headers: headers,
      })
      .pipe(map(response => response.data));
  }

  async create(data: RateDTO) {
    const rate = await this.rateRepository.create(data);
    await this.rateRepository.save(rate);
    return rate;
  }

  getRev(apiId: string) {
    return this.http
      .get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${apiId}`, {
        headers: headers,
      })
      .pipe(map(response => response.data));
  }
}

import { Controller, Get, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

var headers = {
  Accept: 'application/json',
  'user-key': 'ddda24f34833f606365e2497b74af2d5',
};

@Controller('api')
export class ApisController {
  constructor(private readonly http: HttpService) {}
  @Get()
  root() {
    return this.http
      .get('https://developers.zomato.com/api/v2.1/search?q=India&count=20', {
        headers: headers,
      })
      .pipe(map(response => response.data));
  }
}

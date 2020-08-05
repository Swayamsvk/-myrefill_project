import { Controller, Get, HttpService } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

var headers = {
  Accept: 'application/json',
  'user-key': 'ddda24f34833f606365e2497b74af2d5',
};

@Controller()
export class AppController {
  constructor(
    private readonly http: HttpService,
    private readonly appService: AppService,
  ) {}

  //Rendering default message
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //Adding external api to render data
  @Get('api')
  root() {
    return this.http
      .get('https://developers.zomato.com/api/v2.1/search?q=India&count=20', {
        headers: headers,
      })
      .pipe(map(response => response.data));
  }
}

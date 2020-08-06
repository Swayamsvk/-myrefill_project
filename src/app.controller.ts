import { Controller, Get, HttpService } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

var headers = {
  Accept: 'application/json',
  'user-key': 'ddda24f34833f606365e2497b74af2d5',
};

@Controller()
export class AppController {
  constructor(private http: HttpService, private appService: AppService) {}

  //Rendering default message
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

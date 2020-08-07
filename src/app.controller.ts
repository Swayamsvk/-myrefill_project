import { Controller, Get, HttpService } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private http: HttpService, private appService: AppService) {}

  //Rendering default message
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

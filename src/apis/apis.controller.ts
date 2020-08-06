import {
  Controller,
  Post,
  Get,
  Body,
  HttpService,
  Param,
} from '@nestjs/common';
import { ApisService } from './apis.service';
import { RateDTO } from './apis.dto';

var headers = {
  Accept: 'application/json',
  'user-key': 'ddda24f34833f606365e2497b74af2d5',
};

@Controller('apis')
export class ApisController {
  constructor(private http: HttpService, private apisService: ApisService) {}

  @Get('list')
  getList() {
    return this.apisService.getAll();
  }
  @Post('post')
  postApis(@Body() data: RateDTO) {
    return this.apisService.create(data);
  }
  @Get('review/:id')
  getReviews(@Param('id') apiId: string) {
    return this.apisService.getRev(apiId);
  }
}

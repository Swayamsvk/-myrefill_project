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

@Controller('apis')
export class ApisController {
  constructor(private http: HttpService, private apisService: ApisService) {}

  //get the list of restaurants
  @Get('list')
  getList() {
    return this.apisService.getAll();
  }

  //Post information and rating
  @Post('post')
  postApis(@Body() data: RateDTO) {
    return this.apisService.create(data);
  }

  //Get reviewes of resturants
  @Get('review/:id')
  getReviews(@Param('id') apiId: string) {
    return this.apisService.getRev(apiId);
  }
}

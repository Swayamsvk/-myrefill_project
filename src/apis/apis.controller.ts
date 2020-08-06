import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApisService } from './apis.service';
import { RateDTO } from './apis.dto';

@Controller('postapis')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}
  @Post()
  postApis(@Body() data: RateDTO) {
    return this.apisService.create(data);
  }
}

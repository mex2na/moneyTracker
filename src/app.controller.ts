import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: "user"
  //même chose que path tsotra ihany 
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

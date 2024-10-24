import { Controller, Get } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }


  @Get()
  async getBasicReports() {
    // Implement your logic here
    return this.basicReportsService.getBasicReports();
  }
}

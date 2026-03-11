import {
  Body, Controller, Delete,
  Get, Param, Patch, Post,
} from '@nestjs/common'
import { KostService } from './kost.service'

@Controller('kost')
export class KostController {
    constructor(private readonly kostService: KostService) {}
    
    @Get()
    findAll() {
        return this.kostService.findAll();
}

    @Get('filter/:gender')
    filter(@Param('gender') gender: string) {
        return this.kostService.filterByGender(gender);
}

    @Post()
    create(@Body() body) {
        return this.kostService.create(body);
}
}

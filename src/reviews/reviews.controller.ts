import {
  Body, Controller, Delete,
  Get, Param, Patch, Post,
} from '@nestjs/common'
import { ReviewsService } from "./reviews.service";

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}
    @Get(':kos_id')
    findByKos(@Param('kos_id') kosId: number) {
  return this.reviewsService.findByKos(kosId);
}

@Post()
create(@Body() body) {
  return this.reviewsService.create(body);
}
}

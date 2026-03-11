import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) {}
    create(data: any) {
        return this.prisma.reviews.create({ data });
}

findByKos(kos_id: number) {
  return this.prisma.reviews.findMany({
    where: { kos_id },
  });
}
}

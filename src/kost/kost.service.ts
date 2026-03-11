import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class KostService {
    constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.kos.findMany({
      include: {
        images: true,
        facilities: true,
      },
    });
  }

  create(data: any) {
    return this.prisma.kos.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.kos.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.kos.delete({
      where: { id },
    });
  }

  filterByGender(gender: string) {
    return this.prisma.kos.findMany({
      where: { gender },
    });
  }
}

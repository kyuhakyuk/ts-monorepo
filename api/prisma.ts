import { PrismaClient } from '@prisma/client'

class Prisma {
  static prisma: PrismaClient

  static Client() {
    if (this.prisma) {
      return this.prisma
    }

    this.prisma = new PrismaClient()

    return this.prisma
  }
}

export default Prisma.Client()

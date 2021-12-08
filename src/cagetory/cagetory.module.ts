import { Module } from '@nestjs/common';
import { CagetoryService } from './cagetory.service';
import { CagetoryController } from './cagetory.controller';
import { Cagetory } from './entities/cagetory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cagetory])],
  controllers: [CagetoryController],
  providers: [CagetoryService],
})
export class CagetoryModule {}

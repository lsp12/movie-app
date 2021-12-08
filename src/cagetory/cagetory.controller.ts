import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CagetoryService } from './cagetory.service';
import { CreateCagetoryDto } from './dto/create-cagetory.dto';
import { UpdateCagetoryDto } from './dto/update-cagetory.dto';

@Controller('cagetory')
export class CagetoryController {
  constructor(private readonly cagetoryService: CagetoryService) {}

  @Post()
  create(@Body() createCagetoryDto: CreateCagetoryDto) {
    return this.cagetoryService.create(createCagetoryDto);
  }

  @Get()
  findAll() {
    return this.cagetoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cagetoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCagetoryDto: UpdateCagetoryDto,
  ) {
    return this.cagetoryService.update(+id, updateCagetoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cagetoryService.remove(+id);
  }
}

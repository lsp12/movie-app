import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActMovieService } from './act-movie.service';
import { CreateActMovieDto } from './dto/create-act-movie.dto';
import { UpdateActMovieDto } from './dto/update-act-movie.dto';

@Controller('act-movie')
export class ActMovieController {
  constructor(private readonly actMovieService: ActMovieService) {}

  @Post()
  create(@Body() createActMovieDto: CreateActMovieDto) {
    return this.actMovieService.create(createActMovieDto);
  }

  @Get()
  findAll() {
    return this.actMovieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actMovieService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActMovieDto: UpdateActMovieDto,
  ) {
    return this.actMovieService.update(+id, updateActMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actMovieService.delete(+id);
  }

  @Get('mov/:id')
  findByAct(@Param('id') id: string) {
    return this.actMovieService.findByMovie(+id);
  }

  @Get('act/:id')
  findByMov(@Param('id') id: string) {
    return this.actMovieService.findByActor(+id);
  }
}

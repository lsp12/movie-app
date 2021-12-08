import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesActorsCagetoryService } from './movies-actors-cagetory.service';
import { CreateMoviesActorsCagetoryDto } from './dto/create-movies-actors-cagetory.dto';
import { UpdateMoviesActorsCagetoryDto } from './dto/update-movies-actors-cagetory.dto';

@Controller('movies-actors-cagetory')
export class MoviesActorsCagetoryController {
  constructor(
    private readonly moviesActorsCagetoryService: MoviesActorsCagetoryService,
  ) {}

  @Post()
  create(@Body() createMoviesActorsCagetoryDto: CreateMoviesActorsCagetoryDto) {
    return this.moviesActorsCagetoryService.create(
      createMoviesActorsCagetoryDto,
    );
  }

  @Get()
  findAll() {
    return this.moviesActorsCagetoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesActorsCagetoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMoviesActorsCagetoryDto: UpdateMoviesActorsCagetoryDto,
  ) {
    return this.moviesActorsCagetoryService.update(
      +id,
      updateMoviesActorsCagetoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesActorsCagetoryService.remove(+id);
  }

  @Get('mov/:id')
  findMovies(@Param('id') id: string) {
    return this.moviesActorsCagetoryService.findByMovie(+id);
  }

  @Get('act/:id')
  findActors(@Param('id') id: string) {
    return this.moviesActorsCagetoryService.findByCagetory(+id);
  }
}

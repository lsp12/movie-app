import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCagetoryDto } from './dto/create-cagetory.dto';
import { UpdateCagetoryDto } from './dto/update-cagetory.dto';
import { Cagetory } from './entities/cagetory.entity';
import { IcategoryResponse } from './Interface/cagetory.interface';

@Injectable()
export class CagetoryService {
  constructor(
    @InjectRepository(Cagetory)
    public categoryRepository: Repository<Cagetory>,
  ) {}

  async create(
    createCagetoryDto: CreateCagetoryDto,
  ): Promise<IcategoryResponse> {
    try {
      const res = await this.categoryRepository.save(createCagetoryDto);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findAll(): Promise<IcategoryResponse> {
    try {
      const res = await this.categoryRepository.find();
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findOne(id: number): Promise<IcategoryResponse> {
    try {
      const res = await this.categoryRepository.findOne(id);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async update(
    id: number,
    updateCagetoryDto: UpdateCagetoryDto,
  ): Promise<IcategoryResponse> {
    try {
      const res = await this.categoryRepository.update(id, updateCagetoryDto);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async remove(id: number): Promise<IcategoryResponse> {
    try {
      const res = await this.categoryRepository.delete(id);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }
}

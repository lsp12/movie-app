import { PartialType } from '@nestjs/mapped-types';
import { CreateCagetoryDto } from './create-cagetory.dto';

export class UpdateCagetoryDto extends PartialType(CreateCagetoryDto) {}

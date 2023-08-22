import { Get, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto)
    return createdCat.save();
  }

  findAll() {
    return this.catModel.find().exec();
  }

  findOne(id: string): Promise<Cat> {
    const result = this.catModel.findById(id)
    return result;
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    const result = this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true });
    return result
  }

  remove(id: string) {
    const result = this.catModel.findByIdAndRemove(id)
    return result;
  }
}

import { Get, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';
import CatMapper from './dto/cat.mapper';

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
    try{
      return this.catModel.findById(id)
    }catch(error: any){
      return error
    }

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

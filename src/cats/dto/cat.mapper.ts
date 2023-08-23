import { CreateCatDto } from "./create-cat.dto";

export default class CatMapper{
    static toDto(cat: CreateCatDto): CreateCatDto{

        return{
            id: cat.id,
            name: cat.name,
            breed: cat.breed,
            age: cat.age
        }

    }

    static toDtoArray(cats: CreateCatDto[]): CreateCatDto[]{
        const results = [];
        for(let i =0; i<cats.length; i++){
            results.push(this.toDto(cats[i]))
        }
        return results;
    }
}
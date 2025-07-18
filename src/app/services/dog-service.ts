import { Injectable } from '@angular/core';
import { Dog } from '../models/dog.type';

@Injectable()
export class DogService {
  testList : Array<Dog> = [{breed:"yes"}]
}

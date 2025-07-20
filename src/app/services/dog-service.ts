import { inject, Injectable } from '@angular/core';
import { DogHTTP } from '../models/dog.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DogService {
  
  http = inject(HttpClient)
  
  getDogFromApi() : Observable<DogHTTP>
  {
    return this.http.get<DogHTTP>('https://dog.ceo/api/breeds/image/random')
  }
    
}

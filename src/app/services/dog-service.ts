import { inject, Injectable } from '@angular/core';
import { DogHTTP } from '../models/dog.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DogService {
  
  http = inject(HttpClient)
  
  getDogFromApi() : Observable<DogHTTP>
  {
    const randDogUrl = 'https://dog.ceo/api/breeds/image/random'
    return this.http.get<DogHTTP>(randDogUrl)

    /*
    
    
    let dog: Dog = {breed: "", imageUrl: ""} // init below
    let breed: string
    let urlTokens: string []

    this.http.get<DogHTTP>(randDogUrl)
    .pipe(
      catchError((error) => 
        {
        console.log(error)
        throw error
      })
    ).subscribe((response: DogHTTP) => 
      {

      // urls have the format "https://images.dog.ceo/breeds/<breed>/<image>", so want 2nd last for breed
      urlTokens = response.message.split('/')
      breed = urlTokens[urlTokens.length - 2] 
      
      dog = {breed: breed, imageUrl: response.message}
      console.log(`service made dog {${dog.breed}, ${dog.imageUrl}}`)
    })

    return dog;
    */
  }
    
}

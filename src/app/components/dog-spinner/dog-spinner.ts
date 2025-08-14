import { Component, inject, signal } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { Dog, DogHTTP } from '../../models/dog.type';
import { catchError } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dog-spinner',
  imports: [NgOptimizedImage],
  templateUrl:'./dog-spinner.html',
  styleUrl: './dog-spinner.scss',
  providers: [DogService]
})
export class DogSpinner 
{
   private dogService = inject(DogService)

   dog = signal<Dog>({imageUrl: "", breed: ""})

   ngOnInit(): void
   {
      this.newDog();
   }

   newDog(): void
   {
      let urlTokens: string []

      this.dogService.getDogFromApi()
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

               this.dog.set({breed: urlTokens[urlTokens.length - 2], imageUrl: response.message })
            })
   }
}

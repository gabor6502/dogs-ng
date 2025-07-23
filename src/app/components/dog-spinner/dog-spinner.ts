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

   private SPIN_MILLIS = 500
   private DOGS_TO_SPIN: number = 10

   dogsSpun = signal<Array<Dog>>([])

   currDog = signal<number>(0)

   ngOnInit(): void
   {
      this.spinDogs()
   }

   private appendNewDog(): void
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

               this.dogsSpun.update((list) =>
                   {return [...list, {breed: urlTokens[urlTokens.length - 2], imageUrl: response.message }]})
            })
   }
   
   private loadDogs(): void
   {
      this.dogsSpun.set([])

      for (let i = 0; i < this.DOGS_TO_SPIN; i++)
      {
         this.appendNewDog();
      }

      // look into some form of caching so the images load faster

   }

   spinDogs(): void
   {
      this.currDog.set(0)
      this.loadDogs()

      for (let i = 0; i < this.DOGS_TO_SPIN; i++)
      {
         setTimeout(() => 
         {
            this.currDog.set(this.currDog() + 1)
         }, this.SPIN_MILLIS)
      }
   }

}

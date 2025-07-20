import { Component, inject, signal } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { Dog, DogHTTP } from '../../models/dog.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-dog-spinner',
  imports: [],
  templateUrl:'./dog-spinner.html',
  styleUrl: './dog-spinner.scss',
  providers: [DogService]
})
export class DogSpinner 
{
   dogService = inject(DogService)

   private DOGS_TO_SPIN: number = 10
   dogsToSpin = signal<Array<Dog>>([])

   currDog = signal<number>(0)

   ngOnInit(): void
   {
      var initDog: Dog = {breed: "", imageUrl:""}
      this.assignDog(initDog)
      console.log(`dog assignned`)

      this.dogsToSpin.update(() => {return [initDog]})
   }

   private assignDog(dog: Dog): void
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
               dog.imageUrl = response.message
               
               // urls have the format "https://images.dog.ceo/breeds/<breed>/<image>", so want 2nd last for breed
               urlTokens = response.message.split('/')
               dog.breed = urlTokens[urlTokens.length - 2] 

               console.log(`${dog.breed}, ${dog.imageUrl}`)
            })
   }
   
   private loadDogs(): void
   {
      let nextDog: Dog

      let dogArray: Dog[] = new Array(this.DOGS_TO_SPIN)

      for (let i = 0; i < dogArray.length; i++)
      {
         nextDog = {breed: "", imageUrl: ""}
         this.assignDog(nextDog)
         dogArray[i] = nextDog
      }

      this.dogsToSpin.update((values) => {return [...dogArray]})
   }

   spinDogs(): void
   {
      this.loadDogs()
   }

}

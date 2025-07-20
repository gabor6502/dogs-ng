import { Component, inject, signal } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { Dog, DogHTTP } from '../../models/dog.type';
import { catchError, Observable } from 'rxjs';

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

   dog = signal<Dog>({breed: "", imageUrl: ""})

   // testing on init
   ngOnInit(): void
   {
      this.spinDog()
   }

   spinDog(): void
   {
            let breed: string
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
               breed = urlTokens[urlTokens.length - 2] 
               
               this.dog.set({breed: breed, imageUrl: response.message})
            })
   }
}

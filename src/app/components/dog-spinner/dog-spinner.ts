import { Component, inject, signal } from '@angular/core';
import { DogService } from '../../services/dog-service';
import { Dog } from '../../models/dog.type';

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

   dogsTest = signal<Array<Dog>>([])

   // testing on init
   ngOnInit(): void 
   {
      this.dogsTest.set(this.dogService.testList);
   }
}

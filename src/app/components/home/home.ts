import { Component, signal } from '@angular/core';
import { DogSpinner } from "../dog-spinner/dog-spinner";

@Component({
  selector: 'app-home',
  imports: [DogSpinner],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home
{

}

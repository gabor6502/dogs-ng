import { Component, signal } from '@angular/core';
import { DogSpinner } from "../dog-spinner/dog-spinner";
import { HighScores } from "../high-scores/high-scores";
import { Collected } from "../collected/collected";

@Component({
  selector: 'app-home',
  imports: [DogSpinner, HighScores, Collected],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home
{

}

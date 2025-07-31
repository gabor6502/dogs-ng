import { Component, signal } from '@angular/core';
import { DogSpinner } from "../dog-spinner/dog-spinner";
import { UserHighScores } from "../user-high-scores/user-high-scores";
import { Collected } from "../collected/collected";

@Component({
  selector: 'app-home',
  imports: [DogSpinner, UserHighScores, Collected],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home
{
  // empty
}

import { Component, signal } from '@angular/core';
import { UserScore } from '../../models/score.type'

@Component({
  selector: 'app-high-scores',
  imports: [],
  templateUrl: './high-scores.html',
  styleUrl: './high-scores.scss'
})
export class HighScores 
{
    // init with dummy values, no service...yet
    userScore = signal<number>(43242);
    username = signal<string>("gabor6502");
    prevScores = signal<UserScore[]>([
      {score: 312432, date: "2025/07/30"},
      {score: 643534, date: "2025/02/12"},
      {score: 6435233, date: "2019/09/05"},
      {score: 7654, date: "2024/10/13"},
      {score: 98786, date: "2021/03/29"}
    ])
}

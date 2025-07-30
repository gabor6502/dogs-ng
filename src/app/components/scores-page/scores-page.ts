import { Component, signal } from '@angular/core';
import { Score } from '../../models/score.type'

@Component({
  selector: 'app-scores-page',
  imports: [],
  templateUrl: './scores-page.html' ,
  styleUrl: './scores-page.scss'
})
export class ScoresPage 
{
  // temp fake scores
  scores = signal<Score[]>([ 
    {name: "BigRig2117", score: 132342, date: "2022/01/07"},
    {name: "LionelMessi#1", score: 22314, date: "2024/04/30"},
    {name: "JRazz", score: 9859348, date: "2020/11/23"},
    {name: "ColloqiuallyKnown", score: 202123, date: "2005/03/12"},
    {name: "UngaBunga", score: 777777777, date: "2018/09/25"}
  ])

  
}

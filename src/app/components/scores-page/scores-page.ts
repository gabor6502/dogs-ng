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
    {name: "g a choo", score: 777777777, date: "2018/09/25"},
    {name: "womp", score: 5345435, date: "2018/09/05"},
    {name: "klung", score: 32423, date: "2012/09/22"},
    {name: "terry!", score: 867756, date: "2017/09/23"},
    {name: "wilford", score: 23123, date: "2011/01/15"},
    {name: "brumley", score: 86546357, date: "2013/08/20"},
    {name: "klakkin", score: 123312, date: "2019/05/07"},
    {name: "the clapper", score: 432132, date: "2000/03/04"},
    {name: "CAPSLAWK", score: 7562, date: "2041/11/25"},
    {name: "KdotLame-arr", score: 423132, date: "2013/12/09"},
    {name: "Dranke", score: 6787654, date: "2015/10/29"},
    {name: "iliak2gamble", score: 1322132, date: "2014/06/18"},
    {name: "theusername", score: 12212, date: "2017/06/06"},
    {name: "thecoolerusername", score: 88453234, date: "2022/07/25"}
  ])

  
}

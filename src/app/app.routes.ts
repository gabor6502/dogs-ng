import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {return import('./components/home/home').then((module) => module.Home)}
    },
    {
        path: 'about',
        loadComponent: () => {return import('./components/about/about').then((module) => module.About)}
    },
    {
        path: 'scores',
        loadComponent: () => {return import('./components/scores-page/scores-page').then((module) => module.ScoresPage)}
    }
];

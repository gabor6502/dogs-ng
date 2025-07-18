import { Routes } from '@angular/router';

export const routes: Routes = 
[
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {return import('./components/home/home').then((module) => module.Home)}
    },
    {
        path: 'collected',
        loadComponent: () => {return import('./components/collected/collected').then((module) => module.Collected)}
    }
];

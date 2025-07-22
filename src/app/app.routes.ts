import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AppLayoutComponent } from './common/components/app-layout/app-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];

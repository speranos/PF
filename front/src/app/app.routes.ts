import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowCaseComponent } from './show-case/show-case.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'ShowCase', component: ShowCaseComponent}
];

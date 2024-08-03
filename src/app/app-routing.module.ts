import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', loadChildren: () => import('./cats/cats.module').then(m => m.CatsModule) },
  { path: 'dogs', loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
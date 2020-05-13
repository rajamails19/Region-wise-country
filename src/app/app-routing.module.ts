import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryInfoComponent } from './components/country-info/country-info.component';


const routes: Routes = [
  {
    path: '',
    component: CountryInfoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

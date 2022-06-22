import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesAppcomponentComponent } from './countries-appcomponent/countries-appcomponent.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'region', pathMatch: 'full'
  },
  {
    path: '**', component: CountriesAppcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

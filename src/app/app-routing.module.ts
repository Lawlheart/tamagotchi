import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetHomeComponent } from './pages/pet-home/pet-home.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { CreditsComponent } from './pages/credits/credits.component';

const routes: Routes = [{
  path: '',
  component: PetHomeComponent
}, {
  path: 'credits',
  component: CreditsComponent
}, {
  path: 'pet-page',
  component: PetPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

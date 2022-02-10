import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { PetHomeComponent } from './pages/pet-home/pet-home.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PetPageComponent,
    PetHomeComponent,
    PetCardComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

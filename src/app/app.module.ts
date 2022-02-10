import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { PetHomeComponent } from './pages/pet-home/pet-home.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { HeaderComponent } from './components/header/header.component';
import { environment } from 'src/environments/environment';
import { PetState } from './shared/pet.state';

@NgModule({
  declarations: [
    AppComponent,
    PetPageComponent,
    PetHomeComponent,
    PetCardComponent,
    PetDetailComponent,
    CreditsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PetState], { developmentMode: !environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

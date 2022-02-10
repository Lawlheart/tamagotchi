import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadPets } from 'src/app/shared/pet.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tamagotchi';

  constructor(private store: Store) {
    this.loadPets();
  }

  loadPets() {
    console.log('Loading Pets')
    this.store.dispatch(new LoadPets());
  }
}

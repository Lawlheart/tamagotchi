import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadPets } from 'src/app/shared/pet.actions';

import { PetModel } from 'src/app/shared/pet.model';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.scss']
})
export class PetHomeComponent implements OnInit {
  pets$: Observable<PetModel[]>
  petData: any;

  constructor(private store: Store) {
    this.loadPets();

    this.pets$ = this.store.select(state => state.pets.pets)
    this.pets$.subscribe(output => this.petData = output)
  }

  loadPets() {
    console.log('Loading Pets')
    this.store.dispatch(new LoadPets());
  }

  ngOnInit(): void {
  }

}

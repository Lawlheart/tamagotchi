import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PetModel } from 'src/app/shared/pet.model';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.scss']
})
export class PetPageComponent implements OnInit {
  pets$: Observable<PetModel[]>
  activePet$: Observable<number>

  constructor(private store: Store) {
    this.pets$ = this.store.select(state => state.pets.pets)
    this.activePet$ = this.store.select(state => state.pets.activePet)
  }

  ngOnInit(): void {
  }

}

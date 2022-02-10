import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { PetModel } from 'src/app/shared/pet.model';
import { SelectPet } from 'src/app/shared/pet.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.scss']
})
export class PetHomeComponent implements OnInit {
  pets$: Observable<PetModel[]>

  constructor(private store: Store, private _router: Router) {
    this.pets$ = this.store.select(state => state.pets.pets)
  }

  selectPet(pet: PetModel) {
    this.store.dispatch(new SelectPet(pet));
    this._router.navigate(['pet-page'])
  }

  ngOnInit(): void {
  }

}

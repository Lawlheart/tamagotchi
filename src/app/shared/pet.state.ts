import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { PetStateModel } from './pet.model'
import { LoadPets, SelectPet } from './pet.actions';
import { defaultPets } from './pet.data';

@State<PetStateModel>({
  name: 'pets',
  defaults: {
    pets: [],
    activePet: null
  }
})
@Injectable()
export class PetState {
  @Action(LoadPets)
  loadPets({ getState, setState }: StateContext<PetStateModel>) {
    const state = getState();
    setState({
      ...state,
      pets: defaultPets
    });
  }

  @Action(SelectPet)
  selectPet(
    { getState, setState }: StateContext<PetStateModel>,
    { pet }: SelectPet) {
    const state = getState();
    setState({
      ...state,
      activePet: pet.id
    });
    
  }
}
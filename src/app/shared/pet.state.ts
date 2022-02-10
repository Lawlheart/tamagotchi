import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { PetStateModel } from './pet.model'
import { LoadPets } from './pet.actions';
import { defaultPets } from './pet.data';

@State<PetStateModel>({
  name: 'pets',
  defaults: {
    pets: [],
    active: null
  }
})
@Injectable()
export class PetState {
  @Action(LoadPets)
  loadPets(ctx: StateContext<PetStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      pets: defaultPets
    });
  }
}
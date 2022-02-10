import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { PetModel } from './pet.model'

@State<PetModel[]>({
  name: 'pets',
  defaults: [
    {
      name: 'Willow',
      type: 'grass',
      stats: {
        hunger: 100,
        boredom: 100,
        fatigue: 100,
        hygiene: 100,
      }
    }
  ]
})
@Injectable()
export class PetState {}
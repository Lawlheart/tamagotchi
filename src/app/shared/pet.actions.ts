import { PetModel } from "./pet.model";

export class LoadPets {
  static readonly type = '[Pet] Load Default Pets';
  constructor() {}
}

export class SelectPet {
  static readonly type = '[Pet] Select Pet';
  constructor(public pet: PetModel) {}
}
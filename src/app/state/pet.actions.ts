export class AddPet {
  static readonly type = '[Pet] Add Pet';
  constructor(public name: string) {}
}
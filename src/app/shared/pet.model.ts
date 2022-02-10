export interface PetStateModel {
  pets: PetModel[];
  active?: number | null;
}

export interface PetStatsModel {
  hunger: number;
  boredom: number;
  fatigue: number;
  experience: number;
}

export interface PetModel {
  name: string;
  species: string;
  type: string;
  stats?: PetStatsModel;
}
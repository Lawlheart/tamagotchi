export interface PetStateModel {
  pets: PetModel[];
  activePet?: number | null;
}

export interface PetStatsModel {
  hunger: number;
  boredom: number;
  fatigue: number;
  experience: number;
}

export interface PetModel {
  id: number;
  name: string;
  species: string;
  img: string;
  alt: string;
  type: string;
  stats?: PetStatsModel;
}
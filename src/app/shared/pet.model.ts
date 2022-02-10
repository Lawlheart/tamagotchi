export interface PetStats {
  hunger: number;
  boredom: number;
  fatigue: number;
  hygiene: number;
}

export interface PetModel {
  name: string;
  type: string;
  stats: PetStats;
}
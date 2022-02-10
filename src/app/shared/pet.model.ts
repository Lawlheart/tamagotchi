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
  artist?: Artist;
  img?: string;
  alt?: string;
  type: string;
  stats?: PetStatsModel;
}

export interface Artist {
  name: string;
  pageUrl?: string;
  avatarUrl?: string;
}
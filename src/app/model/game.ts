export interface GamePlatform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface GameStore {
  id: number,
  name: string;
  slug: string;
  domain: string;
  image_background: string;
}

export interface GameGenre {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface GameDeveloper {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw?: string;
  released: string;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: { platform: GamePlatform }[];
  stores: { store: GameStore }[];
  developers: GameDeveloper[];
  genres: GameGenre[];
}

export interface GameListRepsonse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface SingleGameResponse {
  results: Game;
}

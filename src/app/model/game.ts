export interface GamePlatform {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface GameGenre {
  id: number;
  slug: string;
  name: string;
  image_background: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  description?: string;
  released: string;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: { platform: GamePlatform }[];
  genres: GameGenre[];
}

export interface GameListRepsonse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

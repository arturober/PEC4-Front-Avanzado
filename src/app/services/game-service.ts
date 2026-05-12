import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { GameListRepsonse } from '../model/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  getGamesResource(page: Signal<number>, pageSize: Signal<number>) {
    return httpResource<GameListRepsonse>(() => {
      const params = new URLSearchParams({ page: String(page()), page_size: String(pageSize()) });
      return `games?${params}`;
    });
  }
}

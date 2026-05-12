import { Component, inject, linkedSignal, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { GameService } from '../../services/game-service';
import { Game, GameListRepsonse } from '../../model/game';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { GameCard } from '../game-card/game-card';
import { GameGrid } from "../game-grid/game-grid";

@Component({
  selector: 'app-game-list',
  imports: [MatIconButton, MatButton, MatProgressSpinner, MatIcon, GameCard, GameGrid],
  templateUrl: './game-list.html',
  styleUrl: './game-list.scss',
})
export class GameList {
  readonly #gameService = inject(GameService);

  readonly page = signal(1);
  readonly pageSize = signal(12);
  readonly viewMode = signal<'list' | 'grid'>('grid');

  readonly gamesResource = this.#gameService.getGamesResource(this.page, this.pageSize);

  games = linkedSignal<GameListRepsonse | undefined, Game[]>({
    source: () => this.gamesResource.value(),
    computation: (resp, previous) => {
      if (!resp) return previous?.value ?? [];
      return this.page() > 1 && previous ? previous.value.concat(resp!.results) : resp?.results;
    },
  });

  loadNextPage() {
    this.page.update((p) => p + 1);
  }
}

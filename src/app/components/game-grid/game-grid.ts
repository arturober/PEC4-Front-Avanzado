import { Component, computed, input } from '@angular/core';
import { Game } from '../../model/game';
import { MatIcon } from '@angular/material/icon';
import { StarRating } from '../star-rating/star-rating';
import { IntlDatePipe } from '../../pipes/intl-date-pipe';

@Component({
  selector: 'game-grid',
  imports: [StarRating, IntlDatePipe],
  templateUrl: './game-grid.html',
  styleUrl: './game-grid.scss',
})
export class GameGrid {
  readonly game = input.required<Game>();

  readonly genres = computed(() =>
    this.game()
      .genres.map((g) => g.name)
      .join(', '),
  );

  readonly platforms = computed(() =>
    this.game()
      .platforms.map((g) => g.platform.name)
      .join(', '),
  );
}

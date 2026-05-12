import { Component, computed, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
} from '@angular/material/card';
import { Game } from '../../model/game';
import { StarRating } from '../star-rating/star-rating';
import { IntlDatePipe } from '../../pipes/intl-date-pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'game-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardImage,
    StarRating,
    IntlDatePipe,
    MatIcon,
  ],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
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

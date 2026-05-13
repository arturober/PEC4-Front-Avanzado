import { Component, computed, effect, inject, input, numberAttribute, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { IntlDatePipe } from '../../pipes/intl-date-pipe';
import { GameService } from '../../services/game-service';
import { StarRating } from '../star-rating/star-rating';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-game-detail',
  imports: [
    MatToolbar,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    RouterLink,
    StarRating,
    IntlDatePipe,
    MatTabGroup,
    MatTab,
  ],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.scss',
})
export class GameDetail {
  readonly id = input.required({ transform: numberAttribute });

  readonly #gameService = inject(GameService);
  readonly #snack = inject(MatSnackBar);
  readonly #router = inject(Router);

  readonly showDetails = signal(false);
  readonly gameResource = this.#gameService.getGameDetailResource(this.id);
  readonly game = computed(() => (this.gameResource.hasValue() ? this.gameResource.value() : null));

  constructor() {
    effect(() => {
      if (this.gameResource.error()) {
        const snackRef = this.#snack.open(
          this.gameResource.error()?.message ?? 'Error desconocido',
          'OK',
          {
            duration: 3000,
            panelClass: 'error',
            verticalPosition: 'top',
          },
        );
        snackRef.afterDismissed().subscribe(() => this.#router.navigate(['/games']));
      }
    });
  }
}

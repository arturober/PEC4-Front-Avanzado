import { Component, inject, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly #matIconReg = inject(MatIconRegistry);

  constructor() {
    this.#matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}

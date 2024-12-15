import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  // public films: Film[] = FILMS;

  constructor(private _filmService: FilmService) {}

  public get films(): Film[] {
    return this._filmService.filteredFilms;
  }
}

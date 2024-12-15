import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';

@Component({
  selector: 'app-catalog',
  standalone: false,

  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  public films: Film[] = FILMS;
}

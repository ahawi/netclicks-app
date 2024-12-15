import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film',
  standalone: false,
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  public films: Film[] = [];
  public film!: Film;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmService: FilmService
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.films = this._filmService.getFullFilms;
    this._initFilm(Number(id));
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find((film) => film.id === id);

    if (findFilm) {
      this.film = findFilm;
    } else {
      this._router.navigate(['/']);
    }
  }
}

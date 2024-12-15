import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public searchString: string = '';

  constructor(private _filmService: FilmService) {}

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchString = target.value;
  }

  public updateSearch(event: Event) {
    this._filmService.searchString = this.searchString;
  }
}

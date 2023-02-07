import { Component } from '@angular/core';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent {
  
  public films: Array<any> = [
    {producer:'Серджо Леоне', filmname:'Однажды в Америке'},
    {producer:'В.Бортко', filmname:'Мастер и Маргарита'},
    {producer:'Э.Цвик', filmname:'Легенды осени'},
    {producer:'М.Пташук', filmname:'В августе 44-го'},
    {producer:'Н.Досталь', filmname:'Штрафбат'}
  ];
  constructor(private interestsService: InterestsService) {
    this.films = interestsService.getFilms();
  }
}

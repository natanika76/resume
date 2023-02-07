import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor() { }

  public getMusics(): Array<any> {
    return [
      {name:'Scorpions', singl:'Wind of change'},
      {name:'Prodigy', singl:'Mindfields'},
      {name:'Metalica', singl:'Nothing else matter'},
      {name:'Eagles', singl:'Hotel California'},
      {name:'Savage', singl:'Only you'}
    ];
  }
  public getFilms(): Array<any> {
    return [
      {producer:'Серджо Леоне', filmname:'Однажды в Америке'},
      {producer:'В.Бортко', filmname:'Мастер и Маргарита'},
      {producer:'Э.Цвик', filmname:'Легенды осени'},
      {producer:'М.Пташук', filmname:'В августе 44-го'},
      {producer:'Н.Досталь', filmname:'Штрафбат'}
    ];
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nowdate: Date = new Date();
  books: Array<any> = [
    {author:'Э.М.Ремарк', booktitle:'Три товарища'},
    {author:'С.Цвейг', booktitle:'Мария Стюарт'},
    {author:'М.Булгаков', booktitle:'Собачье сердце'},
    {author:'Э.Золя', booktitle:'Нана'},
    {author:'Р.Л.Стивенсон', booktitle:'Черная стрела'}
  ];
}

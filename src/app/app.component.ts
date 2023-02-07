import { Component } from '@angular/core';
import { MyMusicComponent } from './my-music/my-music.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { InterestsService } from './interests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InterestsService]
})
export class AppComponent {
  title = 'resume';
  nowdate: Date = new Date();
  books: Array<any> = [
    {author:'Э.М.Ремарк', booktitle:'Три товарища'},
    {author:'С.Цвейг', booktitle:'Мария Стюарт'},
    {author:'М.Булгаков', booktitle:'Собачье сердце'},
    {author:'Э.Золя', booktitle:'Нана'},
    {author:'Р.Л.Стивенсон', booktitle:'Черная стрела'}
  ];
  
}


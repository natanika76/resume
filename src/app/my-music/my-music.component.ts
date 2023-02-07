import { Component } from '@angular/core';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})
export class MyMusicComponent{
public musics: Array<any> =[
  {name:'Scorpions', singl:'Wind of change'},
  {name:'Prodigy', singl:'Mindfields'},
  {name:'Metalica', singl:'Nothing else matter'},
  {name:'Eagles', singl:'Hotel California'},
  {name:'Savage', singl:'Only you'}
];  

constructor(private interestsService: InterestsService) {
  this.musics = interestsService.getMusics();
}

}

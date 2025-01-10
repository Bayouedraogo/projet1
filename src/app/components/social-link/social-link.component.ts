import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Sociallink } from '../../models/social-link';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input()
//name ='Empty';
Sociallink : Sociallink |undefined;

@Output()
selectlink = new EventEmitter<Sociallink>();

getLink(): void {
  console.log(this.Sociallink);
  this.selectlink.emit(this.Sociallink);
}
value="selected link" ;
}

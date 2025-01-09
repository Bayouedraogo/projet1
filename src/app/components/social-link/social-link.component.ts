import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-social-link',
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input()
name ='Empty';

@Output()
selectlink = new EventEmitter<string>();

getLink(): void {
  console.log(this.name);
  this.selectlink.emit(this.value +this.name);
}
value="selected link" ;
}

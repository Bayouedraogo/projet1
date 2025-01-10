import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component'; 
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { Sociallink } from './models/social-link';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileDescriptionComponent,ProfilePhotoComponent,SocialLinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'User Profile';
  selectedlink ="Empty selection";
  screenStyle: string= "screen";

  linkTab:  Sociallink [] = []

  constructor(private dataService: DataService){
  //   for (const link of this.linkTab)
   console.log('from constructor');
  }

  ngOnInit(){
    console.log('from ngOnInit');
    this.linkTab = this.dataService.getLinks();
  }


  displaylink(value:Sociallink){
    this.selectedlink = value.link;
  }
  resetlink(){
    this.selectedlink = "Empty selection";
  }
}

import { Component } from '@angular/core';
import { ProfileDescriptionComponent } from '../profile-description/profile-description.component';
import { ProfilePhotoComponent } from '../profile-photo/profile-photo.component';
import { SocialLinkComponent } from '../social-link/social-link.component';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
handleData($event: Event) {
throw new Error('Method not implemented.');
}

}

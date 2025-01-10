import { Injectable } from '@angular/core';
import { Sociallink } from '../models/social-link';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  links: Sociallink[]=[
    {
      name:"Github" ,
      link:"github.com.ic3"
    },

    {
      name:"Linkedin" ,
      link:"linkedin.com.ic3"
    },

    {
      name:"Twitter" ,
      link:"twitter.com.ic3"
    }
  ]
  

  constructor() { }
  getLinks(): Sociallink[]{
    return this.links;
  }
}

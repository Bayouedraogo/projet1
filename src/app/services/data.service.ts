import { Injectable } from '@angular/core';
import { Sociallink } from '../models/social-link'
import { UserProfile } from '../models/user-profile';

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
  
  profile : UserProfile[]=[
    {
    image : "photo1.jpg",
    fullname : "OUEDRAOGO Rabi",
    location : "ouagadougou",
    links :[],
  },

  {
    image : "photo2.jpg",
    fullname : "OUEDRAOGO Rabi",
    location : "ouagadougou",
    links :[],
  },

  {
    image : "photo3.jpg",
    fullname : "OUEDRAOGO Rabi",
    location : "ouagadougou",
    links :[],
  },


  {
    image : "photo4.jpg",
    fullname : "OUEDRAOGO Rabi",
    location : "ouagadougou",
    links :[],
  },


  ]

  constructor() { }
  getLinks(): Sociallink[]{
    return this.links;
  }
}

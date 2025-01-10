import { Sociallink } from "./social-link";

export interface UserProfile{
    fullname : string;
    image : string;
    location : string;
    links : Sociallink[];
}
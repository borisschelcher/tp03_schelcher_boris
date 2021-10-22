import { Injectable } from "@angular/core";
import { reference } from "@popperjs/core";
import { Subject } from "rxjs";
import { User } from "../models/User.model";
import { RefactorNumberPipe } from "../refactor-number.pipe";

@Injectable({
    providedIn: 'root'
})
export class UserService {
user : User = new User(
    
        'Blonde',
        'Jean',
        '20 rue du croissant',
        90000,
        'Paris',
        '0656859552',
        'test@gmail.com',
        'Monsieur',
        '123456',
        '123456',
        'userlogin',
        'FRANCE'
    
);
inSignin(User : User){
this.user = User;

};

}
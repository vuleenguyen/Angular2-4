import { Subject } from "rxjs/Subject";

export class UsersService {
    userActivated = new Subject(); // allow us to do something cool
}
import { Injectable } from "@angular/core";
import { CounterService } from "app/counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) {}

    onSetToInactive(id: number) {   
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1); // remove element
        this.counterService.incrementActiveToInActive();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1); // remove element
        this.counterService.incrementInActiveToActive();
    }
}
import { Injectable } from "@angular/core";
import { LoggingService } from "app/logging.service";

@Injectable()
export class CounterService {
    counterActiveToInActive = 0;
    counterInActiveToActive = 0;

    constructor(private loggingService: LoggingService) {}

    incrementActiveToInActive() {
        this.counterActiveToInActive++;
        this.loggingService.logActiveToInActive(this.counterActiveToInActive);
    }
    
    incrementInActiveToActive() {
        this.counterInActiveToActive++;
        this.loggingService.logInActiveToActive(this.counterInActiveToActive);
    }
}
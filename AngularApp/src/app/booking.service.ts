import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class BookingService {

totalTicketCountSubject:BehaviorSubject<number> = new BehaviorSubject(10);

  constructor() { }

}

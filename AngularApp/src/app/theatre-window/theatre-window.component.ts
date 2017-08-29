import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-theatre-window',
  templateUrl: './theatre-window.component.html',
  styleUrls: ['./theatre-window.component.css']
})
export class TheatreWindowComponent implements OnInit {
ticketCount:number;
  constructor(private bookingService: BookingService) {

  }

  ngOnInit() {
    this.bookingService.totalTicketCountSubject.subscribe(totalTicketCount => {
      this.ticketCount = totalTicketCount;
    })
  }

  buyTicket() {
    this.bookingService.totalTicketCountSubject.next(this.ticketCount - 1);
  }
}

import { Component, OnInit } from '@angular/core';
import {BookingService} from '../booking.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
  ticketCount: number;

  constructor(private bookingService: BookingService) {

  }

  ngOnInit() {
    this.bookingService.totalTicketCountSubject.subscribe(totalTicketCount => {
      this.ticketCount = totalTicketCount;
    })
  }

  bookShow() {
    this.bookingService.totalTicketCountSubject.next(this.ticketCount - 1);
  }

}

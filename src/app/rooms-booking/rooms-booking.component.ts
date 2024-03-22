import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id!: number;

  ngOnInit(): void {
    this.router.params.subscribe((params) => this.id = parseInt(params['id']));
    // this.router.params.subscribe((params) => this.id = params.id);
  }


}

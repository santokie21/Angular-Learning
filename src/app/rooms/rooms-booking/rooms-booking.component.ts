import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id!: number;

  id$: Observable<number> = this.router.params.pipe(map(params => params['id']));

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    /* this.router.paramMap.subscribe((params) => {
      params.get('id');
    }); */
    // this.router.params.subscribe((params) => this.id = parseInt(params['id']));
    // this.router.params.subscribe((params) => this.id = params.id);
  }


}
